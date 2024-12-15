/** @format */

import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';



const EditButton = ({ id, setEditingNote }) => {
	return (
		<Button
			onClick={() => setEditingNote('')}
			sx={{color: 'grey'}}
		>
			{/* { EditIcon} */}
			<EditIcon fontSize="small"/>

		</Button>
	);
};

export default EditButton;
