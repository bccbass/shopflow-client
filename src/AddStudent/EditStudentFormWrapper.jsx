import * as React from "react";
import { useState, useEffect } from "react";
import {Box, Button, Typography} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddStudentForm from "./AddStudentForm";
import { blankStudent } from "../assets/blankStudentForm";
import SubmitUpdateButton from "../Buttons/SubmitUpdateButton";

const EditStudentFormWrapper = ({student=blankStudent, setOpen}) => {
      const [studentData, setStudentData] = useState(student);

        useEffect(() => {
      console.log('inside effect')

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
        flexWrap: "wrap",
        flexDirection: "column",
        justifyContent: "space-around",
        maxWidth: 410,
        mx: 'auto',
        mt: 6,
        mb: 8
      }}
    >
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button onClick={() => setOpen(false)}>
          <CloseIcon sx={{}} />
        </Button>
      </Box>
            <Typography textAlign={"center"} variant="h5" >
        {`Edit ${studentData.studentFullName}` }
      </Typography>
        <AddStudentForm studentData={studentData} setStudentData={setStudentData} />     

      < SubmitUpdateButton submitProps={{updatedStudent: studentData, setOpen: setOpen, path: `leads/${studentData._id}`, query: "Leads", type: 'put' }} />
    </Box>
  )
}

export default EditStudentFormWrapper