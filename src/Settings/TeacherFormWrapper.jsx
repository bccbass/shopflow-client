import React from "react";
import {
  Button,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
} from "@mui/material";
import { useState } from "react";
import TeacherForm from "./TeacherForm";
import FormTitle from "../FormTitle";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  postResource,
  deleteResource,
  patchResource,
} from "../assets/apiHelpers";

const defaultTeacherForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  instruments: [],
  active: true
};
const TeacherFormWrapper = ({instruments, currentTeacher = false, setOpen, edit }) => {

  const [teacherData, setTeacherData] = useState(
    currentTeacher ? currentTeacher : defaultTeacherForm
  );

  const queryClient = useQueryClient();
  const mutationUpdate = useMutation({
    mutationFn: patchResource,
    onSuccess: () => {
      queryClient.invalidateQueries(["teachers"]);
      setOpen(false);
    },
  });
  const mutationDelete = useMutation({
    mutationFn: deleteResource,
    onSuccess: () => {
      queryClient.invalidateQueries(["teachers"]);
      setOpen(false);
    },
  });
  const mutationCreate = useMutation({
    mutationFn: postResource,
    onSuccess: () => {
      queryClient.invalidateQueries(["teachers"]);
      setOpen(false);
    },
  });

  const submitNewTeacher = () => {
    mutationCreate.mutate({
      path: `teachers`,
      body: teacherData,
    });
  };

  const submitUpdate = () => {
    mutationUpdate.mutate({
      path: `teachers/${currentTeacher._id}`,
      body: teacherData,
    });
  };

  const handleDelete = () => {
    mutationDelete.mutate({
      path: `teachers`,
      id: teacherData._id,
    });
  };
  return (
    <DialogContent
      sx={{
        width: "29rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <FormTitle>{`${currentTeacher ? "Edit" : "Add"} Teacher`}</FormTitle>
      <TeacherForm
      instruments={instruments}
        teacherData={teacherData}
        setTeacherData={setTeacherData}
        edit={currentTeacher}
      />
      <DialogActions
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          onClick={currentTeacher ? submitUpdate : submitNewTeacher}
        //   disabled={invalidData}
          fullWidth
          variant="contained"
        >
          {currentTeacher ? "Update Teacher" : "Submit"}
        </Button>

        <Button
          fullWidth
          variant="outlined"
          color="text.secondary"
          sx={{ my: 2, mr: 0.5 }}
          onClick={() => setOpen(false)}
        >
          Cancel
        </Button>
        {currentTeacher && (
          <Button
            onClick={handleDelete}
            color="error"
            fullWidth
            variant="contained"
            sx={{ mr: 0.5 }}
          >
            Delete Teacher
          </Button>
        )}
      </DialogActions>
    </DialogContent>
  );
};

export default TeacherFormWrapper;
