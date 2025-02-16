import React from "react";
import { useState } from "react";
import { Box, Typography, MenuItem, Menu } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchResource } from "./assets/apiHelpers";
import UpdateIcon from "@mui/icons-material/Update";

const statusArray = [
  "In Progress",
  "Awaiting Response",
  "Awaiting Shipment",
  "Awaiting Pick-Up",
  "Completed",
];

const StatusSelectMenu = ({ id, curStatus = statusArray[0], path }) => {
  const queryClient = useQueryClient();
  const [status, setStatus] = React.useState(curStatus);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  const open = Boolean(menuAnchorEl);

  const mutation = useMutation({
    mutationFn: patchResource,
    onSuccess: () => {
      queryClient.invalidateQueries([path]);
    },
  });

  const handleClose = () => setMenuAnchorEl(null);
  const handleChange = (e) => {
    e.preventDefault();
    setStatus(e.target.id);
    mutation.mutate({
      path: `${path}/${id}`,
      body: { status: e.target.id },
    });
    handleClose();
  };

  return (
    <>
      <Box
        onClick={(e) => setMenuAnchorEl(e.currentTarget)}
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Typography mr={0.8} color="textSecondary">
          < strong >Status: </strong>
          {curStatus}
        </Typography>
        <UpdateIcon />
      </Box>
      <Menu
        sx={{ width: "100%" }}
        size="small"
        id="status"
        open={open}
        onClose={handleClose}
        anchorEl={menuAnchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        name="status"
      >
        {statusArray.map((option) => (
          <MenuItem
            onMouseUp={handleChange}
            size="small"
            id={option}
            key={option}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default StatusSelectMenu;
