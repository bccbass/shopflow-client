import React from "react";
import { useState, useEffect, useMemo, useContext } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import SendEmail from "./Buttons/SendEmail";
import { createEmailTemplateArray, emailURL } from "./assets/emailHelpers.js";
import { UserContext } from "./UserContext.jsx";
import FormTitle from "./FormTitle.jsx";
import RTEditor from "./RTEditor.jsx";

const EmailForm = ({ student, setOpen, info }) => {
  const { user } = useContext(UserContext);
  const templateArray = createEmailTemplateArray(student, info, user.firstName);

  const defaultTemplateId = useMemo(
    () =>
      templateArray.filter(
        (temp) =>
          temp.id ==
          `${student.bookedTrial ? "trialConfirmation" : "initialEnquiry"}`
      )[0].id
  );

  const [activeTemplate, setActiveTemplate] = useState(defaultTemplateId);

  const [emailObj, setEmailObj] = useState({
    personalizations: [
      {
        to: [
          {
            email: student.contact.email,
          },
        ],
        cc: [],
        bcc: [
          {
            email: "support@caringbahmusic.com.au",
          },
        ],
      },
    ],
    from: { email: emailURL, name: "Caringbah Music School" },
    subject: "",
    html: "",
  });

  useEffect(() => {
    const templateObj = templateArray.filter(
      (temp) => temp.id === activeTemplate
    )[0];
    setEmailObj({
      ...emailObj,
      subject: templateObj.subject,
      html: templateObj.html,
    });
  }, [activeTemplate]);

  const handleSelect = (e) => {
    setActiveTemplate(e.target.value);
  };

  return (
    <Box>
      <FormTitle variant="h5">
        Email{" "}
        {student.isMinor ? student.guardianFullName : student.studentFullName}{" "}
      </FormTitle>
      <Box sx={{ display: "flex", flexDirection: "column", mt: 4, mb: 2 }}>
        <Typography variant="h6" color="textSecondary">
          <strong>to: </strong>
          {student?.contact?.email}
        </Typography>
        <Typography variant="h6" color="textSecondary">
          <strong>subject: </strong>
          {emailObj.subject}
        </Typography>
        <FormControl
          size="small"
          sx={{ mt: 2, display: "flex", flexDirection: "row" }}
        >
          <InputLabel id="templateSelect">Email Template</InputLabel>
          <Select
            labelId="templateSelect"
            id="templateSelect"
            value={activeTemplate}
            name="Email Template"
            label="Email Template"
            onChange={handleSelect}
            // sx={{ width: "14.5rem"}}
          >
            {templateArray.map((temp) => (
              <MenuItem
                key={temp.id}
                name={temp?.label}
                disabled={
                  (!student.bookedTrial &&
                    (temp.id == "trialConfirmation" ||
                      temp.id == "trialFollowUp" ||
                      temp.id == "trialUpdate")) ||
                  (student.bookedTrial && temp.id == "initialEnquiry") ||
                  temp.id == "initialEnquiryFollowUp"
                }
                value={temp.id}
              >
                {`${temp.label} `}
                {student.correspondence.includes(temp.id) && (
                  <span
                    style={{
                      marginLeft: "8px",
                      fontSize: ".65rem",
                      color: "white",
                      borderRadius: "8px",
                      padding: "0px 7px 0 7px",
                      backgroundColor: "green",
                      display: "inline-block",
                    }}
                    label="sent"
                  >
                    SENT
                  </span>
                )}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* <TextField
        multiline
        minRows={15}
        name="text"
        value={emailObj.text}
        onChange={(e) =>
          setEmailObj({ ...emailObj, [e.target.name]: e.target.value })
        }
        sx={{ width: "500px" }}
      /> */}
      <RTEditor emailObj={emailObj} setEmailObj={setEmailObj} />
      {/* {console.log(emailObj.html)} */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          my: 3,
        }}
      >
        <SendEmail
          msg={emailObj}
          setOpen={setOpen}
          emailId={activeTemplate}
          userId={student._id}
        />
        <Button sx={{ mt: 1 }} variant="text" onClick={() => setOpen(false)}>
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default EmailForm;
