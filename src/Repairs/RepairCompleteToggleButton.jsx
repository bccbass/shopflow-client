/** @format */

import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchResource } from "../assets/apiHelpers";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import { Tooltip, CircularProgress } from "@mui/material";

const RepairCompleteToggleButton = ({ repair }) => {
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: patchResource,
    onSuccess: async () => {
      await queryClient.invalidateQueries(["repairs"]);
      setIsLoading(false);
      navigate(
        `/repairs?view=${repair.completed ? "inprogress" : "completed"}`
      );
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    mutate({
      path: `repairs/${repair._id}`,
      body: {
        completed: !repair.completed,
        status: repair.completed ? "In Progress" : "Complete",
      },
    });
  };

  return isLoading ? (
    <CircularProgress size={"22px"} sx={{ ml: "20px" }} />
  ) : (
    <Tooltip
      title={repair.completed ? "Change to 'In Progress'" : "Mark as Completed"}
    >
      <Button
        sx={{ color: repair.completed ? "green" : "grey" }}
        onClick={handleSubmit}
      >
        {repair.completed ? (
          <TaskAltIcon fontSize="small" />
        ) : (
          <PanoramaFishEyeIcon fontSize="small" />
        )}
      </Button>
    </Tooltip>
  );
};

export default RepairCompleteToggleButton;
