import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import CreateButton from "../Buttons/CreateButton";
import Typography from "@mui/material/Typography";
import AddStudentForm from "./AddStudentForm";
import { blankStudent } from "../assets/blankStudentForm";
import TrialLessonButton from "../TrialLessonForm/TrialLessonButton";
import ParseAMSLead from "./ParseAMSLead";

const AddStudentFormWrapper = ({ student = blankStudent }) => {
  const [studentData, setStudentData] = useState(student);

  return (
    <Box>
      < ParseAMSLead blankStudent={blankStudent} setStudentData={setStudentData} />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          justifyContent: "space-around",
          maxWidth: 480,
          mx: "auto",
          mt: 6,
          mb: 8,
          border: "1px solid lightgray",
          p: 4,
          borderRadius: 4,
        }}
      >
        <Typography
          variant="h4"
          align="center"
          color="textSecondary"
          gutterBottom
        >
          Add New Student
        </Typography>
        <AddStudentForm
          studentData={studentData}
          setStudentData={setStudentData}
        />
        <TrialLessonButton
          studentData={studentData}
          setStudentData={setStudentData}
        />

        <CreateButton
          buttonProps={{
            buttonText: "Submit",
            path: "leads",
            defaultData: blankStudent,
            data: studentData,
            setData: setStudentData,
            redirect: "/newstudents",
          }}
        />
      </Box>
    </Box>
  );
};

export default AddStudentFormWrapper;
