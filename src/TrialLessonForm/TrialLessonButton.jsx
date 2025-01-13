import React from "react";
import { Box, Button, Collapse } from "@mui/material";
import TrialLessonForm from "../TrialLessonForm/TrialLessonForm";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { blankStudent } from "../assets/blankStudentForm";

const TrialLessonButton = ({ studentData, setStudentData }) => {
  const handleTrialClick = (e) => {
    // TOGGLE TRIAL LESSON BOOLEAN
    setStudentData({
      ...studentData,
      bookedTrial: !studentData.bookedTrial,
      trialLesson: {...studentData.trialLesson, instrument: studentData.student.instrument}
    });
  };
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", width: "100%" }}
    >
      <Button
        variant="outlined"
        sx={{my: 2,}}
        color={studentData.bookedTrial ? "error" : "textPrimary"}
        onClick={handleTrialClick}
        startIcon={studentData.bookedTrial ? <RemoveIcon /> : <AddIcon />}
      >
        {`${!studentData.bookedTrial ? "Add" : "Remove"} Trial Lesson`}
      </Button>

        
        <Collapse sx={{}} in={studentData.bookedTrial}>
        <TrialLessonForm
          studentData={studentData}
          setStudentData={setStudentData}
        />
      </Collapse>
    </Box>
  );
};

export default TrialLessonButton;
