import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import CreateButton from "../Buttons/CreateButton";
import Typography from "@mui/material/Typography";
import AddStudentForm from "./AddStudentForm";
import { blankStudent } from "../assets/blankStudentForm";
import TrialLessonButton from "../TrialLessonForm/TrialLessonButton";
import ParseAMSLead from "./ParseAMSLead";
import OpenUpdateModalButton from "../Buttons/OpenUpdateModalButton";
import FormTitle from "../FormTitle";

const AddStudentFormWrapper = ({ student = blankStudent }) => {
  const [studentData, setStudentData] = useState(student);

  return (
    <Box sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: 'center',
          mx: "auto",
          width: "90vw",
          mt: 6,
          mb: 8,
        }}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          justifyContent: "space-around",
          maxWidth: 480,
          mx: "auto",
          mb: 4,
          border: "1px solid lightgray",
          p: 4,
          borderRadius: 4,
        }}
      >
        <FormTitle
        >
          Add New Student
        </FormTitle>
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
      <OpenUpdateModalButton title='Paste and Parse Text' variant='outlined' >
        < ParseAMSLead blankStudent={blankStudent} setStudentData={setStudentData} />
      </OpenUpdateModalButton>
    </Box>
  );
};

export default AddStudentFormWrapper;
