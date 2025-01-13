/** @format */

import React from "react";
import { useNavigate } from "react-router";
import DeleteIcon from "@mui/icons-material/Delete";
import { Tooltip, Button} from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchResource } from "../assets/apiHelpers";

const CancelLessonButton = ({ id, setIsLoading }) => {
	const queryClient = useQueryClient();	
	const navigate = useNavigate()
	const mutation = useMutation({
		mutationFn: patchResource,
		onSuccess: async () => {
			await queryClient.invalidateQueries(["Leads"]);
			// setIsLoading(false);
			navigate('/newstudents?view=enquiries')
		},
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		mutation.mutate({
			path: `leads/updatetrial/${id}`,
			body: { bookedTrial: false },
		});
	};

	return (
		<Tooltip placement='top' title="Cancel lesson and move student to New Students section.">
			{/* <DeleteIcon onClick={handleSubmit} color="error" /> */}
			<Button onClick={handleSubmit} fullWidth  variant="outlined" color='error' >Delete Trial Lesson</Button>
		</Tooltip>
	);
};

export default CancelLessonButton;
