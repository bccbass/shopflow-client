import * as React from "react";
import { useState, useContext, useEffe } from "react";
import Box from "@mui/material/Box";
import CreateButton from "../Buttons/CreateButton";
import Card from "@mui/material/Card";
import AddStudentForm from "./AddStudentForm";
import { blankStudent } from "../assets/blankStudentForm";
import TrialLessonButton from "../TrialLessonForm/TrialLessonButton";
import ParseAMSLead from "./ParseAMSLead";
import OpenUpdateModalButton from "../Buttons/OpenUpdateModalButton";
import FormTitle from "../FormTitle";
import { UserContext } from '../UserContext'


const AddStudentFormWrapper = ({ student = blankStudent }) => {
  const { user } = useContext(UserContext)
  const [studentData, setStudentData] = useState({...student, createdBy: user.initials});
  // setStudentData({...student, createdBy: user.initials})

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        mx: "auto",
        width: "90vw",
        mt: 6,
        mb: 8,
      }}
    >
      <Card
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          justifyContent: "space-around",
          maxWidth: 480,
          mx: "auto",
          mb: 4,
          p: 4,
          // borderRadius: 4,
        }}
      >
        <FormTitle>Add New Student</FormTitle>
        <Box sx={{ mb: 3, mx: 'auto'}}
        >
        <OpenUpdateModalButton title="Paste and Parse Text" variant="outlined">
        <ParseAMSLead
          blankStudent={studentData}
          setStudentData={setStudentData}
        />
      </OpenUpdateModalButton>
      </Box>
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
            redirect: "/newstudents?view=enquiries",
          }}
        />
      </Card>

    </Box>
  );
};

export default AddStudentFormWrapper;
