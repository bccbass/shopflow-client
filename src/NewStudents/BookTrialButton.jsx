import React from "react";
import { useState } from "react";
import { Button, Modal, Box } from "@mui/material";
import TrialLessonWrapper from "../TrialLessonForm/TrialLessonWrapper";

const BookTrialButton = ({ student }) => {
  const [open, setOpen] = useState(false);
  const [studentData, setStudentData] = useState(student);
  return (
    <>
      <Button onClick={() => setOpen(!open)} variant="contained">
        {student.bookedTrial ? "Edit Trial" : "Book Trial"}
      </Button>
      <Modal open={open} sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            backgroundColor: "white",
            mt: 24,
            height: 430,
            width: 500,
            p: 2,
            borderRadius: "5px",
          }}
        >

          < TrialLessonWrapper setOpen={setOpen} studentData={studentData} setStudentData={setStudentData}/>
        </Box>
      </Modal>
    </>
  );
};

export default BookTrialButton;
