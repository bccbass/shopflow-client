/** @format */

import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import { Tooltip } from "@mui/material";

const EditButton = ({ id, setEditingNote }) => {
	return (
		<Tooltip title="Edit">
			<Button onClick={() => setEditingNote(id)} sx={{ color: "grey" }}>
				<EditIcon fontSize="small" />
			</Button>
		</Tooltip>
	);
};

export default EditButton;
