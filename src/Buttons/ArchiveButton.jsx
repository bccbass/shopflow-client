/** @format */

import React from "react";
import { Button, Tooltip } from "@mui/material";
import RecyclingIcon from '@mui/icons-material/Recycling';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteResource } from "../assets/apiHelpers";
import InboxIcon from "@mui/icons-material/MoveToInbox";

const ArchiveButton = ({ reactivate = false, id }) => {
	const url = reactivate ? `archive/reactivate` : `leads/archive`;

	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: deleteResource,
		onSuccess: () => {
			queryClient.invalidateQueries(["Leads", "Archive"]);
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
					<RecyclingIcon color="secondary" />
				) : (
					<InboxIcon
						// fontSize="large"
						color="secondary"
					/>
				)}
			</Button>
		</Tooltip>
	);
};

export default ArchiveButton;
