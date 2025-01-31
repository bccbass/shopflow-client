/** @format */

import React from "react";
import Button from "@mui/material/Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchResource } from "../assets/apiHelpers";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Tooltip } from "@mui/material";

const TogglePaidButton = ({ order }) => {
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
			<Button sx={{ color: order.paid ? "green" : "red", fontWeight:'bold'}} onClick={handleSubmit}>
				{/* <AttachMoneyIcon fontSize="small" /> */}
				{`$${order.depositAmount}`}
			</Button>
		</Tooltip>
	);
};

export default TogglePaidButton;
