/** @format */

import React from "react";
import Button from "@mui/material/Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchResource } from "../assets/apiHelpers";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Tooltip } from "@mui/material";

const TogglePaidButton = ({ repair }) => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: patchResource,
		onSuccess: () => queryClient.invalidateQueries(["repairs"]),
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		mutation.mutate({
			path: `repairs/${repair._id}`,
			body: { paid: !repair.paid },
		});
	};

	return (
		<Tooltip title={repair.paid ? "Mark as Unpaid" : "Mark as Paid"}>
			<Button sx={{ color: repair.paid ? "white" : "grey", backgroundColor: repair.paid && 'green'}} onClick={handleSubmit}>
				<AttachMoneyIcon />
			</Button>
		</Tooltip>
	);
};

export default TogglePaidButton;
