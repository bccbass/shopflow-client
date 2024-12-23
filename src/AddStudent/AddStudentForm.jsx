import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { Typography, Autocomplete, Button, Collapse } from "@mui/material";
import CreateButton from "../CreateButton";
import { addDays } from "../assets/dateHelpers";
import TrialLessonForm from "../TrialLessonForm/TrialLessonForm";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  instruments,
  groupClasses,
  leadSources,
} from "../assets/dbPlaceholderData.js";

const blankStudent = {
  notes: "",
  nextContactDate: addDays(3),
  leadSource: "",
  student: {
    firstName: "",
    lastName: "",
    instrument: "",
    groupClass: "",
    age: "",
  },
  guardian: {
    firstName: "",
    lastName: "",
  },
  contact: { phone: "", email: "" },
  bookedTrial: "",
  trialLesson: {
    date: "",
    time: "",
    location: "",
    instrument: "",
    groupClass: "",
    teacher: "",
    // followUp: [],
  },
};

export default function AddStudentForm() {
  const [studentData, setStudentData] = useState(blankStudent);
  const [isTrial, setIsTrial] = useState(false);

  const handleChange = (e) =>
    setStudentData({ ...studentData, [e.target.name]: e.target.value });

  const handleStudentChange = (e) =>
    setStudentData({
      ...studentData,
      student: { ...studentData.student, [e.target.name]: e.target.value },
    });

  const handleGuardianChange = (e) =>
    setStudentData({
      ...studentData,
      guardian: { ...studentData.guardian, [e.target.name]: e.target.value },
    });

  const handleContactChange = (e) =>
    setStudentData({
      ...studentData,
      contact: { ...studentData.contact, [e.target.name]: e.target.value },
    });

  const handleTrialClick = (e) => {
    setIsTrial(!isTrial);

    isTrial
      ? setStudentData({
          ...studentData,
          bookedTrial: !isTrial,
          trialLesson: { ...blankStudent.trialLesson },
        })
      : setStudentData({ ...studentData, bookedTrial: !isTrial });
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        justifyContent: "space-around",
        maxWidth: 410,
        mx: 6,
        mt: 6,
        mb: 20,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", my: 1 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Student:
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "nowrap",
            justifyContent: "space-between",
          }}
        >
          <TextField
            size="small"
            id="outlined-helperText"
            label="First Name"
            name="firstName"
            value={studentData.student.firstName}
            onChange={handleStudentChange}
          />

          <TextField
            size="small"
            id="outlined-helperText"
            label="Last Name"
            name="lastName"
            value={studentData.student.lastName}
            onChange={handleStudentChange}
          />
        </Box>
        <Box
          sx={{
            my: 2,
            display: "flex",
            flexWrap: "nowrap",
            justifyContent: "space-between",
          }}
        >
          <TextField
            sx={{ width: "15ch" }}
            size="small"
            id="outlined-helperText"
            label="Instrument"
            select
            name="instrument"
            value={studentData.student.instrument}
            onChange={handleStudentChange}
          >
            {instruments.map((instrument) => (
              <MenuItem value={instrument} key={instrument}>
                {instrument}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            size="small"
            sx={{ mx: 2, width: "20ch" }}
            select
            id="outlined-helperText"
            label="Group Class"
            name="groupClass"
            value={studentData.student.groupClass}
            onChange={handleStudentChange}
          >
            {groupClasses.map((instrument) => (
              <MenuItem value={instrument} key={instrument}>
                {instrument}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            size="small"
            sx={{ width: "7ch" }}
            id="outlined-helperText"
            label="Age"
            name="age"
            value={studentData.student.age}
            onChange={handleStudentChange}
          />
        </Box>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", my: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Parent:
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "nowrap",
            justifyContent: "space-between",
          }}
        >
          <TextField
            //  sx={{mx: 2}}
            size="small"
            id="outlined-helperText"
            label="First Name"
            name="firstName"
            value={studentData.guardian.firstName}
            onChange={handleGuardianChange}
          />
          {/* <TextField
            size="small"
            id="outlined-helperText"
            label="Last Name"
            name="lastName"
            value={studentData.guardian.lastName}
            onChange={handleGuardianChange}
          /> */}
          <Autocomplete
            freeSolo
            size="small"
            disablePortal
            options={[studentData.student.lastName]}
            sx={{ width: "22ch" }}
            value={studentData.guardian.lastName}
            onChange={(e, newValue) =>
              setStudentData({
                ...studentData,
                guardian: {
                  ...studentData.guardian,
                  lastName: newValue,
                },
              })
            }
            renderInput={(params) => (
              <TextField {...params} label="Last Name" />
            )}
          />
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", my: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Contact Details:
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "nowrap",
            justifyContent: "space-between",
          }}
        >
          <TextField
            size="small"
            id="phone"
            label="Phone Number"
            name="phone"
            value={studentData.contact.phone}
            onChange={handleContactChange}
          />
          <TextField
            size="small"
            id="email"
            label="Email"
            name="email"
            value={studentData.contact.email}
            onChange={handleContactChange}
          />
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", my: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Enquiry Details:
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "nowrap",
            justifyContent: "space-between",
          }}
        >
          <TextField
            sx={{ width: "20ch" }}
            size="small"
            id="outlined-helperText"
            label="Lead Source"
            select
            name="leadSource"
            value={studentData.leadSource}
            onChange={handleChange}
          >
            {leadSources.map((instrument) => (
              <MenuItem value={instrument} key={instrument}>
                {instrument}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            size="small"
            sx={{ width: "20ch", ml: 2 }}
            helperText="Next Contact Date"
            name="nextContactDate"
            id="nextContactDate"
            type="date"
            onChange={handleChange}
            value={studentData.nextContactDate}
          />
        </Box>
        <Box
          sx={{
            my: 2,
            display: "flex",
            flexWrap: "nowrap",
            justifyContent: "space-between",
          }}
        >
          <TextField
            size="small"
            sx={{ width: "100%" }}
            id="notes"
            label="Notes"
            multiline
            name="notes"
            value={studentData.notes}
            onChange={handleChange}
            variant="outlined"
          />
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", my: 2 }}>
        <Button
          variant="outlined"
          color="textPrimary"
          onClick={handleTrialClick}
          startIcon={isTrial ? <RemoveIcon /> : <AddIcon />}
        >
          Trial Lesson
        </Button>

        <Collapse in={isTrial}>
          <TrialLessonForm
            studentData={studentData}
            setStudentData={setStudentData}
          />
        </Collapse>
      </Box>
      <CreateButton
        buttonProps={{
          buttonText: "Submit",
          path: "leads",
          defaultData: blankStudent,
          data: studentData,
          setData: setStudentData,
          redirect: "/newstudents",
        }}
      />
    </Box>
  );
}
