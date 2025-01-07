import * as React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { postResource } from "../assets/apiHelpers";



const SendEmail = ({ msg }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: postResource,
    onSuccess: () => {
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutation.mutate({ path: 'utils/message', body: msg });
  };
  return (
    <Button variant='contained' onClick={handleSubmit}>Send Email</Button>
  )
}

export default SendEmail