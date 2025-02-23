import React from "react";
import {
  Button,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
} from "@mui/material";
import { useState } from "react";
import AdminForm from "./AdminForm";
import FormTitle from "../FormTitle";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  postResource,
  deleteResource,
  patchResource,
} from "../assets/apiHelpers";

const defaultAdminForm = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  fullAccess: false,
};
const AdminFormWrapper = ({ currentAdmin = false, setOpen, edit }) => {

  const [invalidData, setInvalidData] = useState(false);

  const [adminData, setAdminData] = useState(
    currentAdmin ? { ...currentAdmin, password: null } : defaultAdminForm
  );

  const queryClient = useQueryClient();
  const mutationUpdate = useMutation({
    mutationFn: patchResource,
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
      setOpen(false);
    },
  });
  const mutationDelete = useMutation({
    mutationFn: deleteResource,
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
      setOpen(false);
    },
  });
  const mutationCreate = useMutation({
    mutationFn: postResource,
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
      setOpen(false);
    },
  });

  const submitNewAdmin = () => {
    mutationCreate.mutate({
      path: `users`,
      body: adminData,
    });
    setOpen(false);
  };

  const submitUpdate = () => {
    mutationUpdate.mutate({
      path: `users/${currentAdmin._id}`,
      body: adminData,
    });
    setOpen(false);
  };

  const handleDelete = () => {
    mutationDelete.mutate({
      path: `users`,
      id: adminData._id,
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
      <FormTitle>{`${currentAdmin ? "Edit" : "Add"} Administrator`}</FormTitle>
      <AdminForm
        adminData={adminData}
        setAdminData={setAdminData}
        edit={currentAdmin}
        setInvalidData={setInvalidData}
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
          onClick={currentAdmin ? submitUpdate : submitNewAdmin}
          disabled={invalidData}
          fullWidth
          variant="contained"
        >
          {currentAdmin ? "Update Administrator" : "Submit"}
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
        {currentAdmin && (
          <Button
            onClick={handleDelete}
            color="error"
            fullWidth
            variant="contained"
            sx={{ mr: 0.5 }}
          >
            Delete Administrator
          </Button>
        )}
      </DialogActions>
    </DialogContent>
  );
};

export default AdminFormWrapper;
