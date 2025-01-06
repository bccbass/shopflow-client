/** @format */

import React from "react";
import Button from "@mui/material/Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchResource } from "../assets/apiHelpers";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { Tooltip } from "@mui/material";

const RepairCompleteToggleButton = ({ repair }) => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: patchResource,
		onSuccess: () => queryClient.invalidateQueries(["repairs"]),
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		mutation.mutate({
			path: `repairs/${repair._id}`,
			body: { completed: !repair.completed, status: repair.completed ? "In Progress" : "Complete" },
		});
	};

	return (
		<Tooltip title={repair.completed ? "Change to 'In Progress'" : "Mark as Completed"}>
			<Button sx={{ color: repair.completed ? "white" : "grey", backgroundColor: repair.completed && 'green' }} onClick={handleSubmit}>
				<TaskAltIcon />
			</Button>
		</Tooltip>
	);
};

export default RepairCompleteToggleButton;
