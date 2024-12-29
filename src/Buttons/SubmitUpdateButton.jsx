/** @format */

import React from "react";
import { Button, Tooltip} from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchResource, putResource } from "../assets/apiHelpers";
import AddBoxIcon from "@mui/icons-material/AddBox";


const SubmitUpdateButton = ({ submitProps }) => {
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
		< Tooltip title='Add resource'>
		<AddBoxIcon onClick={handleSubmit} fontSize="large" color="primary" sx={{mt:1.2}}/>
		</Tooltip>
	) : (
		<Button variant="contained" onClick={handleSubmit}>
			{title}
		</Button>
	);
};

export default SubmitUpdateButton;
