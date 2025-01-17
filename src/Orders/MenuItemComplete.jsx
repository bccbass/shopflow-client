/** @format */

import React from "react";
import { useNavigate } from "react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchResource } from "../assets/apiHelpers";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { Box, ListItemIcon, ListItemText } from "@mui/material";

const MenuItemComplete = ({ order }) => {
	const queryClient = useQueryClient();
	const navigate = useNavigate()
	const mutation = useMutation({
		mutationFn: patchResource,
		onSuccess: () => {queryClient.invalidateQueries(["orders"]); navigate(`/orders?view=${order.completed ? 'inprogress' : 'completed'}`)},
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		mutation.mutate({
			path: `orders/${order._id}`,
			body: { completed: !order.completed, status: order.completed ? "In Progress" : "Complete" },
		});
	};

	return (
		<Box sx={{ display: "flex", width: '100%' }} onClick={handleSubmit}>
			<ListItemIcon>
				<TaskAltIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>{order.completed ? 'Mark Incomplete' : 'Mark Complete'}</ListItemText>
		</Box>
	);
};

export default MenuItemComplete;
