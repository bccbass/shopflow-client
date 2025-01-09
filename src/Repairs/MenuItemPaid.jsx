/** @format */

import React from "react";
import {Box, ListItemText, ListItemIcon } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchResource } from "../assets/apiHelpers";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Tooltip } from "@mui/material";

const MenuItemPaid = ({ repair }) => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: patchResource,
		onSuccess: () => queryClient.invalidateQueries(["repairs"]),
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		mutation.mutate({
			path: `repairs/${repair._id}`,
			body: { paid: !repair.paid },
		});
	};

	return (
			<Box sx={{ display: "flex", width: '100%' }} onClick={handleSubmit}>
				<ListItemIcon>
                    <AttachMoneyIcon  fontSize="small"/>
                </ListItemIcon>
                <ListItemText>{repair.paid ? 'Mark Unpaid' : 'Mark Paid'}</ListItemText>
			</Box>
	);
};

export default MenuItemPaid;
