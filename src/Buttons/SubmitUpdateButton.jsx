/** @format */

import React from "react";
import { Button } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchResource, putResource } from "../assets/apiHelpers";

const SubmitUpdateButton = ({ submitProps }) => {
    const { updatedStudent, path, query, type, setOpen=false, successCb=null } = submitProps
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: type == 'patch' && patchResource || type == 'put' && putResource,
		onSuccess: () => {queryClient.invalidateQueries([query]);
    setOpen && setOpen(false); successCb && successCb()}
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		mutation.mutate({
			path: path,
			body: updatedStudent,
		});
	};

	return (
		<Button variant="contained" onClick={handleSubmit}>
			Submit
		</Button>
	);
};

export default SubmitUpdateButton;
