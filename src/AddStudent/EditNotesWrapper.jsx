import React from "react";
import { Button, DialogTitle, DialogContent, DialogActions, TextField } from "@mui/material";
import SubmitUpdateButton from "../Buttons/SubmitUpdateButton";
import { useState, useEffect } from "react";


const EditNotesWrapper = ({ student, setOpen }) => {
  const [studentData, setStudentData] = useState(student);

  return (
    <DialogContent
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >

      <DialogTitle textAlign={"center"} variant="h5" >
        {`Edit ${studentData.studentFullName} Notes` }
      </DialogTitle>
            <TextField
            size="small"
            sx={{ width: "100%", minHeight: '40px', my: 4 }}
            id="notes"
            label="Notes"
            multiline
            name="notes"
            value={studentData.notes}
            onChange={(e) => setStudentData({...studentData, notes: e.target.value})}
            variant="outlined"
          />
< DialogActions sx={{display: 'flex', flexDirection: 'column'}} >
      < SubmitUpdateButton submitProps={{updatedStudent: studentData, setOpen: setOpen, path: `leads/${studentData._id}`, query: "Leads", type: 'put' }} />
              <Button sx={{my: 2}}  onClick={() => setOpen(false)}>
          Cancel
        </Button>
      </DialogActions>
    </DialogContent>
  );
};

export default EditNotesWrapper;
