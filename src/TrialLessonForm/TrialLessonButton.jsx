import React from 'react'
import { Box, Button, Collapse } from '@mui/material'
import TrialLessonForm from "../TrialLessonForm/TrialLessonForm";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { blankStudent } from "../assets/blankStudentForm";


const TrialLessonButton = ({studentData, setStudentData}) => {
      const handleTrialClick = (e) => {
    // TOGGLE TRIAL LESSON BOOLEAN
    setStudentData({
          ...studentData,
          bookedTrial: !studentData.bookedTrial
        })
        // LOGIC TO SET TRIAL LESSON DATA WHEN CLICKED (IE REMOVE TRIAL LESSOND DATA IF USER CLICKS REMOVE TRIAL LESSON BUTTON)
    studentData.bookedTrial
      ? setStudentData({
          ...studentData,
          bookedTrial: !studentData.bookedTrial,
          trialLesson: { ...blankStudent.trialLesson },
        })
      : setStudentData({ ...studentData, bookedTrial: !studentData.bookedTrial });
  };
  return (
        <Box sx={{ display: "flex", flexDirection: "column", my: 2, width: '100%' }}>
        <Button
          variant="outlined"
          color={studentData.bookedTrial ? "error" : "textPrimary"}
          onClick={handleTrialClick}
          startIcon={studentData.bookedTrial ? <RemoveIcon /> : <AddIcon />}
        >
          {`${!studentData.bookedTrial ? "Add" : "Remove"
} Trial Lesson`}
        </Button>

        <Collapse in={studentData.bookedTrial}>
          <TrialLessonForm
            studentData={studentData}
            setStudentData={setStudentData}
          />
        </Collapse>
      </Box>
  )
}

export default TrialLessonButton