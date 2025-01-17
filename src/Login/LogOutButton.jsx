import React from "react";
import { useContext } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { postResource } from "../assets/apiHelpers";
import { Button } from "@mui/material";
import { UserContext } from "../UserContext";

const LogOutButton = () => {

  const { logout } =useContext(UserContext)



  return (
    <Button onClick={logout} sx={{}} color="inherit">
      Logout
    </Button>
  );
};

export default LogOutButton;
