/** @format */

import React from "react";
import { Button, Tooltip } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteResource } from "../assets/apiHelpers";
import AddBoxIcon from "@mui/icons-material/AddBox";
import InboxIcon from "@mui/icons-material/MoveToInbox";


const ArchiveButton = ({reactivate=false, id}) => {
    const url = reactivate ? `archive/reactivate` : `leads/archive`

	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: deleteResource,
		onSuccess: () => {
			queryClient.invalidateQueries(['Leads', 'Archive']);
		},
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		mutation.mutate({
			path: url,
            id: id
		});
	};

	return (
		<Tooltip title={reactivate ? 'Reactivate archived lead' : 'Archive lead'}>
			<InboxIcon
				onClick={handleSubmit}
				fontSize="large"
				color="secondary"
			/>
		</Tooltip>
	); 
};

export default ArchiveButton;
