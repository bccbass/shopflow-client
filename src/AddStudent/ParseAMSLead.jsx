import React from "react";
import { useState } from "react";
import {
  Box,
  TextField,
  Tooltip,
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import FormTitle from "../FormTitle";
const ParseAMSLead = ({ blankStudent, setStudentData, setOpen }) => {
  const [inputText, setInputText] = useState("");
  const [isAdult, setIsAdult] = useState(false);

  const handleParse = (e) => {
    const name = inputText?.split("Name: ")[1]?.split("Email")[0]?.split(" ");
    const email = inputText?.split("Email: ")[1]?.split("Phone")[0];
    const phone = inputText?.split("Phone Number: ")[1]?.split("Musical")[0];
    const notes = inputText?.split("Musical Goal: ")[1]?.split("Source")[0];

    inputText.length &&
      setStudentData({
        ...blankStudent,
        student: {
          firstName: typeof name == "object" && isAdult ? name[0] : "",
          lastName: typeof name == "object" && isAdult ? name[1] : "",
        },
        guardian: {
          firstName: typeof name == "object" && !isAdult ? name[0] : "",
          lastName: typeof name == "object" && !isAdult ? name[1] : "",
        },
        contact: { email: email, phone: phone },
        leadSource: "AMS Leads",
        notes: notes,
      });
    setOpen(false);
  };

  return (
    <Box
      sx={{
        width: "25rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mb: 2,
      }}
    >
      <FormTitle>Paste and Parse Data</FormTitle>
      <TextField
        placeholder="Paste new-lead email and click 'Submit' to parse"
        multiline
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        minRows={5}
        sx={{ width: "100%"}}
      ></TextField>
      <Tooltip
        placement="top"
        title="Select if enquiry is for an adult student"
      >
        <FormControlLabel
          sx={{ color: "grey", mb: 2, ml: -30 }}
          control={
            <Checkbox
              checked={isAdult}
              onChange={() => setIsAdult(!isAdult)}
              name="isAdult"
            />
          }
          label="Adult Student"
          // labelPlacement='start'
        />
      </Tooltip>
      <Button variant="outlined" onClick={handleParse}>
        {" "}
        Submit
      </Button>
      <Button
        sx={{ mt: 1, color: "grey" }}
        variant="text"
        onClick={() => setOpen(false)}
      >
        Cancel
      </Button>
    </Box>
  );
};

export default ParseAMSLead;
