/** @format */

import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Tooltip } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchResource } from "../assets/apiHelpers";

const CancelLessonButton = ({ id, setOpen }) => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: patchResource,
		onSuccess: () => {
			queryClient.invalidateQueries(["Leads"]);
			setOpen(false);
		},
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		mutation.mutate({
			path: `leads/updatetrial/${id}`,
			body: { bookedTrial: false },
		});
	};

	return (
		<Tooltip placement='top' title="Cancel lesson and move student to New Students section.">
			<DeleteIcon onClick={handleSubmit} color="error" />
		</Tooltip>
	);
};

export default CancelLessonButton;
