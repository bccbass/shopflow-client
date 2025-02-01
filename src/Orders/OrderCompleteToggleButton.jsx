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

const OrderCompleteToggleButton = ({ order }) => {
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: patchResource,
    onSuccess: async () => {
      await queryClient.invalidateQueries(["orders"]);
      setIsLoading(false);
      navigate(
        `/orders?view=${order.completed ? "inprogress" : "completed"}`
      );
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLoading(true);
    mutate({
      path: `orders/${order._id}`,
      body: {
        completed: !order.completed,
        status: order.completed ? "In Progress" : "Complete",
      },
    });
  };

  return isLoading ? (
    <CircularProgress size={"22px"} sx={{ ml: "20px" }} />
  ) : (
    <Tooltip
      title={order.completed ? "Change to 'In Progress'" : "Mark as Completed"}
    >
      <Button
        sx={{ color: order.completed ? "green" : "grey" }}
        onClick={handleSubmit}
      >
        {order.completed ? (
          <TaskAltIcon  />
        ) : (
          <PanoramaFishEyeIcon  />
        )}
      </Button>
    </Tooltip>
  );
};

export default OrderCompleteToggleButton;
