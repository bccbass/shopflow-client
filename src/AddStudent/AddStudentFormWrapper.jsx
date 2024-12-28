import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { Typography, Autocomplete, Button, Collapse } from "@mui/material";
import CreateButton from "../Buttons/CreateButton";
import AddStudentForm from "./AddStudentForm";
import TrialLessonForm from "../TrialLessonForm/TrialLessonForm";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  instruments,
  groupClasses,
  leadSources,
} from "../assets/dbPlaceholderData.js";
import { blankStudent } from "../assets/blankStudentForm";
import TrialLessonButton from "../TrialLessonForm/TrialLessonButton";

const AddStudentFormWrapper = ({student=blankStudent}) => {
      const [studentData, setStudentData] = useState(student);

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
        <AddStudentForm studentData={studentData} setStudentData={setStudentData} />
        < TrialLessonButton studentData={studentData} setStudentData={setStudentData} />
     
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
  )
}

export default AddStudentFormWrapper