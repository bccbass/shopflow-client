import * as React from "react";
import { useState, useEffect } from "react";
import {
  Box,
  Button,
  DialogActions,
  DialogTitle,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddStudentForm from "./AddStudentForm";
import { blankStudent } from "../assets/blankStudentForm";
import SubmitUpdateButton from "../Buttons/SubmitUpdateButton";
import { formatDate } from "../assets/dateHelpers";

const EditStudentFormWrapper = ({ student = blankStudent, setOpen }) => {
  const [studentData, setStudentData] = useState(student);

  useEffect(() => {
    // Reformat trial lesson date from student data so it can be used as an input value and not throw error
    const formattedDate = formatDate(studentData.nextContactDate)
    setStudentData({
      ...studentData,
      nextContactDate: formattedDate
    });
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        justifyContent: "space-around",
        maxWidth: 410,
        mx: "auto",
      }}
    >
      <DialogTitle textAlign={"center"} variant="h5">
        {`Edit ${studentData.studentFullName}`}
      </DialogTitle>
      <AddStudentForm
        studentData={studentData}
        setStudentData={setStudentData}
      />

      <DialogActions sx={{ display: "flex", flexDirection: "column" }}>
        <SubmitUpdateButton
          submitProps={{
            updatedStudent: studentData,
            setOpen: setOpen,
            path: `leads/${studentData._id}`,
            query: "Leads",
            type: "put",
          }}
        />
        <Button sx={{ my: 2 }} onClick={() => setOpen(false)}>
          Cancel
        </Button>
      </DialogActions>
    </Box>
  );
};

export default EditStudentFormWrapper;
