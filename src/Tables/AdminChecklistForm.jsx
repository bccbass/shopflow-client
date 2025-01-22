import React from "react";
import { Box, Typography } from "@mui/material";

const AdminChecklistForm = ({ lead, children }) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          p: 3,
          width: "96%",
          borderRadius: "12px",
          display: "flex",
          flexDirection: "column",
          bgcolor: "teal",
        }}
      >
        <Typography
          color="white"
          align="center"
          variant="h5"
          fontWeight={"bold"}
        >
          {`${lead.enrolled ? 'Enrollment' : 'Trial Lesson'} Checklist`}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          {children}
          
        </Box>
      </Box>
    </Box>
  );
};

export default AdminChecklistForm;
