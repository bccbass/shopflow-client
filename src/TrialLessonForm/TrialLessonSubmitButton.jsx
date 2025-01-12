/** @format */

import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchResource } from "../assets/apiHelpers";

const TrialLessonSubmitButton = ({ updatedStudent, setOpen }) => {
	const queryClient = useQueryClient();
	const navigate = useNavigate()
	const mutation = useMutation({
		mutationFn: patchResource,
		onSuccess: () => {queryClient.invalidateQueries(["leads"]),
			navigate('/newstudents?view=triallessons'),
    		setOpen(false)}
	});

	const dataPayload = {
		bookedTrial: 1,
		trialLesson: { ...updatedStudent.trialLesson },
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		mutation.mutate({
			path: `leads/updatetrial/${updatedStudent._id}`,
			body: dataPayload,
		});
		//   if (mutation.isSuccess) {
		//     setEditingNote();
		//   }
	};

	return (
		<Button variant="contained" onClick={handleSubmit}>
			Submit
		</Button>
	);
};

export default TrialLessonSubmitButton;
