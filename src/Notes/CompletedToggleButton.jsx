/** @format */

import React from "react";
import Button from "@mui/material/Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchResource } from "../assets/apiHelpers";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { Tooltip } from "@mui/material";

const NoteEditCard = ({ note }) => {

	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: patchResource,
		onSuccess: () => queryClient.invalidateQueries(["notes"]),
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		mutation.mutate({ path: `notes/${note._id}`, body: {completed: !note.completed} });
	};

	return (
		<Tooltip title='Toggle complete'>
			<Button sx={{ color: "grey" }} onClick={handleSubmit}>
				<TaskAltIcon />
			</Button>
		</Tooltip>
	);
};

export default NoteEditCard;
