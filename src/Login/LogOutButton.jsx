import React from "react";
import { useContext } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { postResource } from "../assets/apiHelpers";
import { Button } from "@mui/material";
import { UserContext } from "../UserContext";

const LogOutButton = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleSubmit = () => {
    mutation.mutate({ path: "auth/logout" });
  };
  const mutation = useMutation({
    mutationFn: postResource,
    onError: (error) => console.log("error", error),

    onSuccess: () => {
      navigate("/login");
      console.log("success fn logout");
      queryClient.removeQueries(["user"]);

    },
  });

  return (
    <Button onClick={handleSubmit} sx={{}} color="inherit">
      Logout
    </Button>
  );
};

export default LogOutButton;
