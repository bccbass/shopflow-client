import React from "react";
import { Box, ListItemIcon, ListItemText, Tooltip } from "@mui/material";
import { useNavigate } from "react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteResource } from "../assets/apiHelpers";
import RecyclingIcon from '@mui/icons-material/Recycling';


const MenuItemUnarchive = ({ id }) => {
  let navigate = useNavigate();

  const url = `archive/reactivate` ;

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
<Tooltip placement='top-end' title={"Reactivate archived lead"}>
    <Box onClick={handleSubmit} sx={{ display: "flex", width: '100%' }}>
      <ListItemIcon>
        <RecyclingIcon fontSize="small" />
      </ListItemIcon>
      <ListItemText>Unarchive</ListItemText>
    </Box>
</Tooltip>

  );
};

export default MenuItemUnarchive;
