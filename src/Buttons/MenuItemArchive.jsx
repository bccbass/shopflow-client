import React from "react";
import { Box, ListItemIcon, ListItemText } from "@mui/material";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteResource } from "../assets/apiHelpers";
import InboxIcon from "@mui/icons-material/MoveToInbox";

const MenuItemArchive = ({ id }) => {
  const url = `leads/archive`;

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
    <Box onClick={handleSubmit} sx={{ display: "flex" }}>
      <ListItemIcon>
        <InboxIcon fontSize="small" />
      </ListItemIcon>
      <ListItemText>Archive</ListItemText>
    </Box>
  );
};

export default MenuItemArchive;
