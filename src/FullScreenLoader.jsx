import React from "react";
import { Container, CircularProgress } from "@mui/material";
const FullScreenLoader = () => {
  return (
    <Container
      sx={{
        height: "90vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </Container>
  );
};

export default FullScreenLoader;
