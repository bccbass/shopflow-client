import React from "react";
import { Button, DialogTitle, DialogContent, DialogActions, TextField } from "@mui/material";
import SubmitUpdateButton from "../Buttons/SubmitUpdateButton";
import { useState, useEffect } from "react";
import FormTitle from "../FormTitle";



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

      <FormTitle >
        {`Edit ${studentData.studentFullName} Notes` }
      </FormTitle>
            <TextField
            rows={6}
            size="small"
            sx={{ width: "100%", minHeight: '40px', mb: 4 }}
            id="notes"
            label="Notes"
            multiline
            name="notes"
            value={studentData.notes}
            onChange={(e) => setStudentData({...studentData, notes: e.target.value})}
            variant="outlined"
          />
< DialogActions sx={{display: 'flex', flexDirection: 'column'}} >
      < SubmitUpdateButton submitProps={{updatedData: studentData, setOpen: setOpen, path: `leads/${studentData._id}`, query: "leads", type: 'put' }} />
              <Button sx={{my: 2}}  onClick={() => setOpen(false)}>
          Cancel
        </Button>
      </DialogActions>
    </DialogContent>
  );
};

export default EditNotesWrapper;
