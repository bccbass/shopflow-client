/** @format */

import React from "react";
import Button from "@mui/material/Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchResource } from "../assets/apiHelpers";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { Tooltip } from "@mui/material";

const TogglePaidButton = ({ order, verbose = false }) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: patchResource,
    onSuccess: () => queryClient.invalidateQueries(["orders"]),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    mutation.mutate({
      path: `orders/${order._id}`,
      body: { paid: !order.paid },
    });
  };

  return (
    <Tooltip title={order.paid ? "Mark as Unpaid" : "Mark as Paid"}>
      <Button
        variant={verbose ? "contained" : ""}
        color={order.paid ? "primary" : "error"}
        sx={{
          color: verbose ? "white" : order.paid ? "primary.main" : "error.main",
          fontWeight: "bold",
          my: verbose ? 3 : 0,
        }}
        onClick={handleSubmit}
      >
        {verbose
          ? `${order.paid ? "Amount Paid: " : "Deposit Owed: "}
            ${order.depositAmount ? "$" + order?.depositAmount : "$" + 0}
            ${order.totalAmount && " of $" + order?.totalAmount}`
          : `$${order.depositAmount}`}
      </Button>
    </Tooltip>
  );
};

export default TogglePaidButton;
