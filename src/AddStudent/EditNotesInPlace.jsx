import React from "react";
import { Button, Box, TextField } from "@mui/material";
import SubmitUpdateButton from "../Buttons/SubmitUpdateButton";
import { useState } from "react";

const EditNotesInPlace = ({ student, setOpen }) => {
  const [studentData, setStudentData] = useState(student);

  return (
    <Box sx={{display: "flex", height: '89%', flexDirection: "column", justifyContent: "space-between" }}>
      <TextField
        rows={5}
        variant="outlined"
        size="small"
        sx={{ width: "100%", minHeight: "40px" }}
        id="notes"
        // label="Notes"
        multiline
        name="notes"
        value={studentData.notes}
        onChange={(e) =>
          setStudentData({ ...studentData, notes: e.target.value })
        }
      />
      <Box sx={{ display: "flex", flexDirection: 'column'}}>
        <SubmitUpdateButton
          submitProps={{
            variant: "outlined",
            title: 'Save Changes',
            updatedData: studentData,
            setOpen: setOpen,
            path: `leads/${studentData._id}`,
            query: "leads",
            type: "put",
          }}
        />

      </Box>
    </Box>
  );
};

export default EditNotesInPlace;
