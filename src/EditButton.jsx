/** @format */

import React from "react";
import EditIcon from '@mui/icons-material/Edit';


const EditButton = ({ toggleEdit }) => {
	return (
		<span
			className={ `cursor-default w-fit text-gray-500 hover:text-gray-400 transition-all`}
			onClick={toggleEdit}
		>
			{/* { EditIcon} */}
			<EditIcon fontSize="small"/>

		</span>
	);
};

export default EditButton;
