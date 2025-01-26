import React from "react";
import { Box, Typography } from "@mui/material";

const AdminChecklistForm = ({ lead, children }) => {
  return
  //  (
    // <Box
    //   sx={{
    //     width: "100%",
    //     display: "flex",
    //     flexDirection: "column",
    //     alignItems: "center",
    //   }}
    // >
      {/* <Box
        sx={{
          // p: 3,
          width: "100%",
          borderRadius: "12px",
          display: "flex",
          flexDirection: "column",
          bgcolor: "teal",
        }}
      > */}

      <Box
        sx={{
          width: "96%",

          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-around",
        }}
      >
        {children}
      </Box>
    // </Box>
    // </Box>
  // );
};

export default AdminChecklistForm;
