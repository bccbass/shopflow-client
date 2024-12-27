import React from "react";
import { Button, Typography, Box } from "@mui/material";
import TrialLessonForm from "./TrialLessonForm";
import CloseIcon from "@mui/icons-material/Close";
import TrialLessonSubmitButton from "./TrialLessonSubmitButton";
import { useState, useEffect } from "react";


const TrialLessonWrapper = ({ student, setOpen }) => {
  const [studentData, setStudentData] = useState(student);
  useEffect(() => {
    // Reformat trial lesson date from student data so it can be used as an input value and not throw error
    const formattedDate = studentData.bookedTrial
      ? studentData?.trialLesson?.date?.split("T")[0]
      : "";
    setStudentData({
      ...studentData,
      trialLesson: { ...studentData.trialLesson, date: formattedDate },
    });
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button onClick={() => setOpen(false)}>
          <CloseIcon sx={{}} />
        </Button>
      </Box>

      <Typography textAlign={"center"} variant="h5" >
        {`${studentData.studentFullName} Trial Lesson` }
      </Typography>
      <TrialLessonForm
        studentData={studentData}
        setStudentData={setStudentData}
      />
      <TrialLessonSubmitButton updatedStudent={studentData} setOpen={setOpen} />
    </Box>
  );
};

export default TrialLessonWrapper;
