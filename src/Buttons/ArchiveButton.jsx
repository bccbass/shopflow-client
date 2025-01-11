/** @format */

import React from "react";
import { useNavigate } from "react-router";
import { Button, Tooltip } from "@mui/material";
import RecyclingIcon from '@mui/icons-material/Recycling';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteResource } from "../assets/apiHelpers";
import InboxIcon from "@mui/icons-material/MoveToInbox";

const ArchiveButton = ({ reactivate = false, id, bookedTrial=false }) => {
	const navigate = useNavigate()
	const url = reactivate ? `archive/reactivate` : `leads/archive`;

	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: deleteResource,
		onSuccess: () => {
			queryClient.invalidateQueries(["Leads", "Archive"]);
			navigate('/newstudents')
		},
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		mutation.mutate({
			path: url,
			id: id,
		});
	};

	return (
		<Tooltip title={reactivate ? "Reactivate archived lead" : "Archive lead"}>
			<Button
				className={` ${
					mutation.isIdle || (mutation.isPending && "text-slate-200")
				}`}
				disabled={mutation.isPending}
				onClick={handleSubmit}
				sx={{ px: 2 }}
			>
				{reactivate ? (
					<RecyclingIcon sx={{color: 'grey'}} />
				) : (
					<InboxIcon
						// fontSize="large"
						sx={{color: 'grey'}}
					/>
				)}
			</Button>
		</Tooltip>
	);
};

export default ArchiveButton;
