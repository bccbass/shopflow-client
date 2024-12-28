/** @format */

import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";

const EditButton = ({ id, setEditingNote }) => {
	return (
		<Button onClick={() => setEditingNote(id)} sx={{ color: "grey" }}>
			<EditIcon fontSize="small" />
		</Button>
	);
};

export default EditButton;
