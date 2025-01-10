import * as React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import Button from "@mui/material/Button";
import { postResource } from "../assets/apiHelpers";



const SendEmail = ({ msg, setOpen, userId, emailId }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();


  const mutation = useMutation({
    mutationFn: postResource,
    onSuccess: () => {queryClient.invalidateQueries(['leads']); setOpen(false)
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutation.mutate({ path: `utils/message?userId=${userId}&emailId=${emailId}`, body: msg });
  };
  return (
    <Button variant='contained' onClick={handleSubmit}>Send Email</Button>
  )
}

export default SendEmail