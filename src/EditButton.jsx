/** @format */

import React from "react";

const EditButton = ({ toggleEdit }) => {
	return (
		<span
			className={ `cursor-default w-fit rounded-md p-1 m-1 text-gray-700 hover:text-gray-400 transition-all`}
			onClick={toggleEdit}
		>
			edit
		</span>
	);
};

export default EditButton;
