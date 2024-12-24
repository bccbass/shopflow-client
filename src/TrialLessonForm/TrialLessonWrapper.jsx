import React from "react";
import { Button, Typography, Box } from "@mui/material";
import TrialLessonForm from "./TrialLessonForm";
import CloseIcon from "@mui/icons-material/Close";
import TrialLessonSubmitButton from "./TrialLessonSubmitButton";

const TrialLessonWrapper = ({ studentData, setStudentData, setOpen }) => {
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
        {`${studentData.student.firstName}  ${studentData.student.lastName} Trial Lesson` }
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
