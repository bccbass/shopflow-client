/** @format */

import React from "react";
import { Button, Tooltip } from "@mui/material";
import { useNavigate } from "react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchResource, putResource } from "../assets/apiHelpers";
import AddBoxIcon from "@mui/icons-material/AddBox";

const SubmitUpdateButton = ({ submitProps }) => {
  const {
    updatedData,
    path,
    query = path,
    type = "patch",
    setOpen = false,
    redirect = false,
    successCb = null,
    title = "Submit",
    variant = "contained",
  } = submitProps;
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn:
      (type == "patch" && patchResource) || (type == "put" && putResource),
    onSuccess: () => {
      queryClient.invalidateQueries([query]);
      setOpen && setOpen(false);
      successCb && successCb();
      redirect && navigate(redirect);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutation.mutate({
      path: path,
      body: updatedData,
    });
  };

  return title == "add" ? (
    <Tooltip title="Add resource">
      <AddBoxIcon
        onClick={handleSubmit}
        fontSize="large"
        color="primary"
        sx={{ mt: 1.2 }}
      />
    </Tooltip>
  ) : (
    <Button variant={variant} onClick={handleSubmit}>
      {title}
    </Button>
  );
};

export default SubmitUpdateButton;
