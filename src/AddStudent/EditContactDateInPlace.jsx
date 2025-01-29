import React from "react";
import { Button, Box, TextField, Tooltip } from "@mui/material";
import { useState } from "react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import CloseIcon from "@mui/icons-material/Close";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchResource } from "../assets/apiHelpers";

const EditContactDateInPlace = ({ student, setOpen }) => {
  const [studentContactDate, setStudentContactDate] = useState({
    nextContactDate: student.nextContactDate?.split("T")[0],
  });

  const handleChange = (e) =>
    setStudentContactDate({ nextContactDate: e.target.value });

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: patchResource,
    onSuccess: () => {
      queryClient.invalidateQueries(["leads"]);
      setOpen && setOpen(false);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutation.mutate({
      path: `leads/${student._id}`,
      body: studentContactDate,
    });
  };

  return (
    <Box
      sx={{
        flex: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <TextField
        size="small"
        sx={{ flex: 4, mr: 0.3 }}
        // helperText="Next Contact Date"
        name="nextContactDate"
        id="nextContactDate"
        type="date"
        onChange={handleChange}
        value={studentContactDate.nextContactDate}
      />
      <Tooltip title='Save Changes'>
        <TaskAltIcon
          fontSize="small"
          sx={{ flex: 1 }}
          variant={"text"}
          color={"success"}
          onClick={handleSubmit}
        />
      </Tooltip>
      <Tooltip  title='Discard Changes'>
        <CloseIcon
          fontSize="small"
          style={{ flex: 1 }}
          variant="text"
          color="error"
          onClick={() => setOpen(false)}
        />
      </Tooltip>
    </Box>
  );
};

export default EditContactDateInPlace;
