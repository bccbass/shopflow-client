/** @format */

import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchResource } from "../assets/apiHelpers";

const TrialLessonSubmitButton = ({ updatedStudent, setIsLoading, setOpen }) => {
	const queryClient = useQueryClient();
	const navigate = useNavigate()
	const mutation = useMutation({
		mutationFn: patchResource,
		onSuccess: async () => {
			await queryClient.invalidateQueries(["leads"]);
			// setIsLoading(false);
			navigate(`/newstudents?view=${'triallessons'}`)
			setOpen(false)
    			}
	});

	const dataPayload = {
		bookedTrial: 1,
		trialLesson: { ...updatedStudent.trialLesson },
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		mutation.mutate({
			path: `leads/updatetrial/${updatedStudent._id}`,
			body: dataPayload,
		});
	};

	return  (<Button fullWidth variant="contained" onClick={handleSubmit}>
				Submit
			</Button>)
};

export default TrialLessonSubmitButton;
