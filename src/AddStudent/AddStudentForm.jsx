import * as React from "react";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { Typography } from "@mui/material";
import { postResource } from "../assets/apiHelpers";

const blankStudent = {
  notes: "",
  nextContactDate: "",
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
  // bookedTrial: '',
  // trialLesson: {
  //   date: "",
  //   time: "",
  //   location: "",
  //   instrument: "",
  //   groupClass: "",
  //   teacher: "",
  //   followUp: [],
  // },
};

const instruments = [
  "Guitar",
  "Voice",
  "Piano",
  "Bass",
  "Drums",
  "Flute",
  "Saxophone",
  "Ukulele",
  "Violin",
];
const groupClasses = [
  "Pop Choir",
  "Adult Jam Group",
  "Adult Guitar Group",
  "Kids Keyboard Group",
  "Kids Rock Band",
];
const leadSources = [
  "Google Ads",
  "Website",
  "Phone",
  "Walk-in",
  "Word of Mouth",
];
export default function AddStudentForm() {
  const [studentData, setStudentData] = useState(blankStudent);
  const [open, setOpen] = React.useState(false);

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

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: postResource,
    onSuccess: () => {
      setOpen(true);
      queryClient.invalidateQueries(["leads"]);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutation.mutate({ path: "leads", body: studentData });
    setStudentData(blankStudent);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <Snackbar
        sx={{ mt: 10 }}
        severity="success"
        variant="filled"
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
      >
               <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Successfully added new enquiry
        </Alert>
        </Snackbar>
      <Box sx={{ m: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Student:
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "nowrap",
            alignContent: "space-between",
          }}
        >
          <TextField
            //  sx={{mx: 2}}
            size="small"
            id="outlined-helperText"
            label="First Name"
            name="firstName"
            value={studentData.student.firstName}
            onChange={handleStudentChange}
          />

          <TextField
            size="small"
            sx={{ mx: 2 }}
            id="outlined-helperText"
            label="Last Name"
            name="lastName"
            value={studentData.student.lastName}
            onChange={handleStudentChange}
          />
        </Box>
        <Box
          sx={{
            my: 4,
            display: "flex",
            flexWrap: "nowrap",
            alignContent: "space-between",
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
      <Box sx={{ m: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Parent:
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "nowrap" }}>
          <TextField
            //  sx={{mx: 2}}
            size="small"
            id="outlined-helperText"
            label="First Name"
            name="firstName"
            value={studentData.guardian.firstName}
            onChange={handleGuardianChange}
          />
          <TextField
            size="small"
            sx={{ mx: 2 }}
            id="outlined-helperText"
            label="Last Name"
            name="lastName"
            value={studentData.guardian.lastName}
            onChange={handleGuardianChange}
          />
        </Box>
      </Box>
      <Box sx={{ m: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Contact Details:
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "nowrap" }}>
          <TextField
            //  sx={{mx: 2}}
            size="small"
            id="phone"
            label="Phone Number"
            name="phone"
            value={studentData.contact.phone}
            onChange={handleContactChange}
          />
          <TextField
            size="small"
            sx={{ mx: 2 }}
            id="email"
            label="Email"
            name="email"
            value={studentData.contact.email}
            onChange={handleContactChange}
          />
        </Box>
      </Box>
      <Box sx={{ m: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Enquiry Details:
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "nowrap",
            alignContent: "space-between",
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
            my: 4,
            display: "flex",
            flexWrap: "nowrap",
            alignContent: "space-between",
          }}
        >
          <TextField
            size="small"
            sx={{ width: "42ch" }}
            id="notes"
            label="Notes"
            multiline
            name="notes"
            value={studentData.notes}
            onChange={handleChange}
            variant="outlined"
          />
        </Box>
        <Button
          variant="outlined"
          disabled={mutation.isPending}
          sx={{ margin: "auto" }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}
