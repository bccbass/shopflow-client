import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getResource } from "./assets/apiHelpers.js";
import { useState, useEffect, useMemo } from "react";
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
  createEmailTemplateArray,
  emailURL
} from "./assets/emailHelpers.js";

const EmailForm = ({ student, setOpen, info }) => {



  const templateArray =  createEmailTemplateArray(student, info)

  const defaultTemplateId = useMemo(() => templateArray.filter(temp => temp.id==`${student.bookedTrial ? 'trialConfirmation': 'initialEnquiry'}` )[0].id)
  
  const [activeTemplate, setActiveTemplate] = useState(defaultTemplateId);

  const [emailObj, setEmailObj] = useState({to: 'bccbass@gmail.com', from: emailURL, subject: '', text: ''});

  useEffect(()=>{
    const templateObj = templateArray.filter(temp => temp.id === activeTemplate)[0]
    setEmailObj({...emailObj, subject: templateObj.subject, text: templateObj.text})
  }, [activeTemplate])

  const handleSelect = (e) => {
    setActiveTemplate(e.target.value)}

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
            name="Email Template"
            label="Email Template"
            onChange={handleSelect}
          >
            {templateArray.map(temp => <MenuItem key={temp.id} name={temp.label} disabled={!student.bookedTrial && (temp.id == "trialConfirmation" || temp.id == "trialFollowUp") || (student.bookedTrial && temp.id == 'initialEnquiry')} value={temp.id}>{temp.label}</MenuItem>)}

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
        <Button sx={{ mt: 1 }} variant="text:" onClick={() => setOpen(false)}>
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default EmailForm;
