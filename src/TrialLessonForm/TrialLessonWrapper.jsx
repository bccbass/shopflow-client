import React from "react";
import {
  Button,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
} from "@mui/material";
import TrialLessonForm from "./TrialLessonForm";
import TrialLessonSubmitButton from "./TrialLessonSubmitButton";
import { useState, useEffect } from "react";
import CancelLessonButton from "../Buttons/CancelLessonButton";
import { formatDate } from "../assets/dateHelpers";

const TrialLessonWrapper = ({ student, setOpen }) => {
  const [studentData, setStudentData] = useState(student);
   
  useEffect(() => {
    // Reformat trial lesson date from student data so it can be used as an input value and not throw error
    const formattedDate = formatDate(student.trialLesson.date);
    !studentData.trialLesson.instrument && setStudentData({
      ...studentData,
      trialLesson: { ...studentData.trialLesson, date: formattedDate, instrument: studentData.student.instrument  },
    });
  }, []);
  return (
    <DialogContent
      sx={{
        width: "29rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <DialogTitle textAlign={"center"} variant="h5">
        {`${studentData.studentFullName} Trial Lesson`}
      </DialogTitle>
      <TrialLessonForm
        studentData={studentData}
        setStudentData={setStudentData}
      />
      <DialogActions sx={{ display: "flex", flexDirection: "column" }}>
        <TrialLessonSubmitButton
          updatedStudent={studentData}
          setOpen={setOpen}
        />
        <Button sx={{ my: 2 }} onClick={() => setOpen(false)}>
          Cancel
        </Button>
      </DialogActions>
      {studentData.bookedTrial && (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            mx: 2,
          }}
        >
          <CancelLessonButton id={studentData._id} setOpen={setOpen} />
        </Box>
      )}
    </DialogContent>
  );
};

export default TrialLessonWrapper;
