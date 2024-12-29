/** @format */

import React from "react";
import { Button } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchResource, putResource } from "../assets/apiHelpers";
import AddBoxIcon from "@mui/icons-material/AddBox";


const SubmitUpdateButton = ({ children, submitProps }) => {
    const { updatedStudent, path, query, type, setOpen=false, successCb=null, title='Submit' } = submitProps
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

	return title == "add" ? (
		<AddBoxIcon onClick={handleSubmit} fontSize="large" color="primary" />
	) : (
		<Button variant="contained" onClick={handleSubmit}>
			{title}
		</Button>
	);
};

export default SubmitUpdateButton;
