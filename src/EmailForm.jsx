import React from "react";
import { useState } from "react";
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
import {
  generateInitialEnquiry,
  generateTrialConfirmation,
} from "./assets/emailHelpers.js";

const EmailForm = ({ student, setOpen }) => {
  const initialEmail = generateInitialEnquiry(student);
  const trialEmail = generateTrialConfirmation(student);

  const [activeTemplate, setActiveTemplate] = useState(
    student.bookedTrial ? trialEmail : initialEmail
  );
  const defaultEmailObj = {
    to: "bccbass@gmail.com",
    from: "info@caringbahmusic.com.au",
    subject: activeTemplate.subject,
    text: activeTemplate.text,
  };

  const [emailObj, setEmailObj] = useState(defaultEmailObj);

  const handleSelect = (e) => {
    setActiveTemplate(e.target.value);
    setEmailObj({
      ...emailObj,
      subject: e.target.value.subject,
      text: e.target.value.text,
    })}

  return (
    <Box>
      <Typography variant="h5" align="center" color="primary">
        Email{" "}
        {student.isMinor ? student.guardianFullName : student.studentFullName}{" "}
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", mt: 4, mb: 2 }}>
        <Typography variant="h6" color="textSecondary">
          <strong>to: </strong>
          {student?.contact?.email}
        </Typography>
        <Typography variant="h6" color="textSecondary">
          <strong>subject: </strong>
          {emailObj?.subject}
        </Typography>
        <FormControl size="small" sx={{ width: "12rem", mt: 2 }}>
          <InputLabel id="templateSelect">Email Template</InputLabel>
          <Select
            labelId="templateSelect"
            id="templateSelect"
            value={activeTemplate}
            label="Email Template"
            onChange={handleSelect}
          >
            {/* {[initialEmail, trialEmail].map((email) => (
              <MenuItem name={email.label} value={email}>
                {email.label}
              </MenuItem>
            ))} */}

            <MenuItem name={initialEmail?.label} value={initialEmail}>{initialEmail?.label}</MenuItem>
            <MenuItem name={trialEmail?.label} value={trialEmail}>{trialEmail?.label}</MenuItem>

          </Select>
        </FormControl>
      </Box>

      <TextField
        multiline
        minRows={15}
        name="text"
        value={emailObj.text}
        onChange={(e) =>
          setEmailObj({ ...emailObj, [e.target.name]: e.target.value })
        }
        sx={{ width: "500px" }}
      />
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
        <SendEmail msg={emailObj} setOpen={setOpen} />
        <Button sx={{ mt: 1 }} variant="text" onClick={() => setOpen(false)}>
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default EmailForm;
