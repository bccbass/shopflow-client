/** @format */

import React from "react";
import EditIcon from '@mui/icons-material/Edit';


const EditButton = ({ id, setEditingNote }) => {
	return (
		<span
			className={ `cursor-default w-fit  text-gray-500 hover:text-gray-400 transition-all`}
			onClick={() => setEditingNote(id)}
		>
			{/* { EditIcon} */}
			<EditIcon fontSize="small"/>

		</span>
	);
};

export default EditButton;
