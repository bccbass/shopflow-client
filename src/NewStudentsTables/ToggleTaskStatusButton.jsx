/** @format */

import React from "react";
import { useState } from "react";
import Fab from "@mui/material/Fab";
import Box from "@mui/material/Box";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchResource } from "../assets/apiHelpers";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import { Tooltip, CircularProgress, Typography } from "@mui/material";

const ToggleTaskStatusButton = ({
  taskName,
  description,
  updateKey,
  taskStatus,
  id,
}) => {
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(false);
  const { mutate } = useMutation({
    mutationFn: patchResource,
    onSuccess: async () => {
      await queryClient.invalidateQueries(["leads"]);
      setIsLoading(false);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    mutate({
      path: `leads/updatefollowup/${id}`,
      body: {
        [updateKey]: { [taskName]: !taskStatus },
      },
    });
  };

  return (
    <Box
      sx={{
        width: "22%",
        px: 3,
        pt: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isLoading ? (
        <Fab>
          <CircularProgress size={"22px"} sx={{}} />
        </Fab>
      ) : (
        <Fab
          sx={{
            color: taskStatus ? "green" : "grey",
            bgcolor: taskStatus && "white",
          }}
          onClick={handleSubmit}
        >
          {taskStatus ? (
            <TaskAltIcon fontSize="large" />
          ) : (
            <PanoramaFishEyeIcon fontSize="large" />
          )}
        </Fab>
      )}
      <Typography
        sx={{
          textAlign: "center",
          width: "95%",
          p: 1,
          border: "1px solid silver",
          borderRadius: "6px",
          mt: -1,
          bgcolor: "teal",
          color: "white",
        }}
        color="text.secondary"
      >
        {description}
      </Typography>
    </Box>
  );
};

export default ToggleTaskStatusButton;
