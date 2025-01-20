import React from "react";
import ToggleTaskStatusButton from "./ToggleTaskStatusButton";
import { Box, Typography } from "@mui/material";

const EnrollmentFollowUpForm = ({ lead }) => {
  return (
    <Box
      sx={{ mt: 3, width: "100%", display: "flex", flexDirection: "column", alignItems: 'center' }}
    >
      <Box
        sx={{
          p: 3,
          width: "96%",
          borderRadius: '12px',
          display: "flex",
          flexDirection: "column",
          bgcolor: "teal",
        }}
      >
        <Typography color="white" align="center" variant="h5" fontWeight={"bold"}>
          Enrollment Follow Up Checklist
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "row", alignItems: 'flex-start' }}>
          {Object.keys(lead.enrollmentFollowUp).map((task, i) => (
            <ToggleTaskStatusButton
              key={i}
              id={lead._id}
              taskName={task}
              taskStatus={lead.enrollmentFollowUp[task]}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default EnrollmentFollowUpForm;
