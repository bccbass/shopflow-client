/** @format */

import React from "react";
import {Box, ListItemText, ListItemIcon } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchResource } from "../assets/apiHelpers";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Tooltip } from "@mui/material";

const MenuItemPaid = ({ order }) => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: patchResource,
		onSuccess: () => queryClient.invalidateQueries(["orders"]),
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		mutation.mutate({
			path: `orders/${order._id}`,
			body: { paid: !order.paid },
		});
	};

	return (
			<Box sx={{ display: "flex", width: '100%' }} onClick={handleSubmit}>
				<ListItemIcon>
                    <AttachMoneyIcon  fontSize="small"/>
                </ListItemIcon>
                <ListItemText>{order.paid ? 'Mark Unpaid' : 'Mark Paid'}</ListItemText>
			</Box>
	);
};

export default MenuItemPaid;
