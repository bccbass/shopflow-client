/** @format */

import React from "react";
import { Container, Box, Typography, TextField } from "@mui/material";
import SignInCard from "./SignInCard";

const Login = () => {
  return (
    <Container
      sx={{
        p: 0,
        mx: "auto",
        width: "100%",
      }}
    >
      <SignInCard />
    </Container>
  );
};

export default Login;
