/** @format */

import React from "react";
import Button from "@mui/material/Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchResource } from "../assets/apiHelpers";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { Tooltip } from "@mui/material";

const ToggleTrialPaidButton = ({ student }) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: patchResource,
    onSuccess: () => queryClient.invalidateQueries(["leads"]),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutation.mutate({
      path: `leads/updatetrial/${student._id}`,
      body: { paid: !student.trialLesson.paid },
    });
  };

  return (
    <Tooltip
      title={student.trialLesson.paid ? "Mark as Unpaid" : "Mark as Paid"}
    >
      <Button
        variant="outlined"
        sx={{
          borderColor:student.trialLesson.paid ? "teal" : "red",
          color: student.trialLesson.paid ? "teal" : "red",
          fontWeight: "bold",
        }}
        onClick={handleSubmit}
      >
        {/* <AttachMoneyIcon fontSize="small" /> */}
        {`$ ${student.trialLesson.paid ? "Paid" : "Unpaid"}`}
      </Button>
    </Tooltip>
  );
};

export default ToggleTrialPaidButton;
