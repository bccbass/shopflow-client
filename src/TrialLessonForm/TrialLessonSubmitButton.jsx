/** @format */

import React from "react";
import { Button } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchResource } from "../assets/apiHelpers";

const TrialLessonSubmitButton = ({ updatedStudent, setOpen }) => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: patchResource,
		onSuccess: () => {queryClient.invalidateQueries(["leads"]);
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
