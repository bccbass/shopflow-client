import React from "react";
import { useState } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";

const ParseAMSLead = ({ blankStudent, setStudentData }) => {
  const [inputText, setInputText] = useState("");

  const handleParse = (e) => {
    const name = inputText?.split("Name: ")[1]?.split("Email")[0]?.split(" ");
    const email = inputText?.split("Email: ")[1]?.split("Phone")[0];
    const phone = inputText?.split("Phone Number: ")[1]?.split("Musical")[0];
    const notes = inputText?.split("Musical Goal: ")[1]?.split("Source")[0];

    inputText.length && setStudentData({
      ...blankStudent,
      student: { firstName: typeof name == 'object' ? name[0] : '', lastName: typeof name == 'object' ? name[1] : ''},
      guardian: { firstName: typeof name == 'object' ? name[0] : '', lastName: typeof name == 'object' ? name[1] : ''},
      contact: { email: email, phone: phone },
      leadSource: "AMS Leads",
      notes: notes
    });
  };

  return (
    <Box
      sx={{
        width: "20rem",
        p: 6,
        mx: 6,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h6">Parse Data</Typography>
      <TextField
        placeholder="paste AMS lead text to parse"
        multiline
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        minRows={5}
        sx={{ width: "20rem", my: 2 }}
      ></TextField>
      <Button variant="outlined" onClick={handleParse}>
        {" "}
        Parse Lead
      </Button>
    </Box>
  );
};

export default ParseAMSLead;
