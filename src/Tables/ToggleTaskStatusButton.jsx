/** @format */

import React from "react";
import { useState } from "react";
import Fab from "@mui/material/Fab";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchResource } from "../assets/apiHelpers";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import {
  Tooltip,
  CircularProgress,
  CardHeader,
  Typography,
} from "@mui/material";

const ToggleTaskStatusButton = ({ taskName, taskStatus, id }) => {
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(false);
  const { mutate } = useMutation({
    mutationFn: patchResource,
    onSuccess: async () => {
      await queryClient.invalidateQueries(["leads"]);
      setIsLoading(false);
    },
  });

  const taskDescriptions = {
    timetable: "Update Timetables (MMS & SS)",
    status: 'Make Student "Active" in MMS',
    createInvoice: "Create Term Invoice in MMS",
    sentInvoice: "Email Completed Invoice from MMS",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    mutate({
      path: `leads/updatefollowup/${id}`,
      body: {
        enrollmentFollowUp: { [taskName]: !taskStatus },
      },
    });
  };

  return (
    <Box
      sx={{
        width: "25%",
        p: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isLoading ? (
        <Fab>
          <CircularProgress size={"22px"} sx={{ ml: "20px" }} />
        </Fab>
      ) : (
        <Tooltip title={taskDescriptions[taskName]}>
          <Fab
            sx={{ color: taskStatus ? "green" : "grey" }}
            onClick={handleSubmit}
          >
            {taskStatus ? (
              <TaskAltIcon fontSize="large" />
            ) : (
              <PanoramaFishEyeIcon fontSize="large" />
            )}
          </Fab>
        </Tooltip>
      )}
      <Typography
        
        sx={{
          textAlign: 'center', 
          width: "95%",
          p: 1,
          border: "1px solid silver",
          borderRadius: "6px",
          mt: -1,
          bgcolor: "teal",
          color: "white",
        }}
        color="text.secondary"
      >{`${taskDescriptions[taskName]}`}</Typography>
    </Box>
  );
};

export default ToggleTaskStatusButton;
