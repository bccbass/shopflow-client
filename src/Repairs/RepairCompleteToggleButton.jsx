/** @format */

import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchResource } from "../assets/apiHelpers";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { Tooltip } from "@mui/material";

const RepairCompleteToggleButton = ({ repair }) => {
	const queryClient = useQueryClient();
	const navigate = useNavigate()
	const mutation = useMutation({
		mutationFn: patchResource,
		onSuccess: () => {queryClient.invalidateQueries(["repairs"]); navigate(`/repairs?view=${repair.completed ? 'inprogress' : 'completed'}`)},
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
			<Button sx={{ color: repair.completed ? "green" : "grey" }} onClick={handleSubmit}>
				<TaskAltIcon fontSize="small" />
			</Button>
		</Tooltip>
	);
};

export default RepairCompleteToggleButton;
