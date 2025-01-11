/** @format */

import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteResource } from "../assets/apiHelpers";
import DeleteButton from './DeleteButton' 
import { Box, ListItemIcon, ListItemText } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";


const MenuItemDelete = ({ id, path }) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: deleteResource,
    onSuccess: () => {
      queryClient.invalidateQueries(['repairs']);
    },
  });
  const handleClick = (e) => {
    e.preventDefault();
    mutation.mutate({ path: path, id: id });
  };

  return (
		<Box sx={{ display: "flex", width: '100%' }} onClick={handleClick}>
			<ListItemIcon>
				< DeleteOutlineOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Delete Forever</ListItemText>
		</Box>
	);
};

export default MenuItemDelete