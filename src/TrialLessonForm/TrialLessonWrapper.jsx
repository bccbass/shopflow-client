import React from "react";
import { Button, DialogContent, DialogActions } from "@mui/material";
import TrialLessonForm from "./TrialLessonForm";
import FormTitle from "../FormTitle";
import TrialLessonSubmitButton from "./TrialLessonSubmitButton";
import { useState, useEffect } from "react";
import CancelLessonButton from "../Buttons/CancelLessonButton";
import { formatDate } from "../assets/dateHelpers";
import LoadingSpinner from "../LoadingSpinner";

const TrialLessonWrapper = ({ student, setOpen }) => {
  const [studentData, setStudentData] = useState(student);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Reformat trial lesson date from student data so it can be used as an input value and not throw error
    const formattedDate = formatDate(student.trialLesson.date);
      setStudentData({
        ...studentData,
        trialLesson: {
          ...studentData.trialLesson,
          date: formattedDate,
          instrument: !studentData.trialLesson.instrument ? studentData?.student?.instrument : studentData?.trialLesson?.instrument,
        },
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
      <FormTitle>{`${studentData.studentFullName} Trial Lesson`}</FormTitle>
      <TrialLessonForm
        studentData={studentData}
        setStudentData={setStudentData}
      />
      {isLoading ? (
        <LoadingSpinner
          height={studentData.bookedTrial ? "11.3rem" : "9.1rem"}
        />
      ) : (
        <DialogActions
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <TrialLessonSubmitButton
            updatedStudent={studentData}
            setIsLoading={setIsLoading}
            setOpen={setOpen}
          />
          <Button
            fullWidth
            variant="outlined"
            sx={{ my: 2 }}
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          {studentData.bookedTrial && (
            <CancelLessonButton
              id={studentData._id}
              setIsLoading={setIsLoading}
            />
          )}
        </DialogActions>
      )}
    </DialogContent>
  );
};

export default TrialLessonWrapper;
