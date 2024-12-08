/** @format */

import React from "react";

const Modal = ({ children }) => {
	return (
		<div className="w-screen h-screen absolute flex justify-center content-center left-0 top-0 z-50 bg-black opacity-40 ">
            <div className="opacity-100">
			{children}
            </div>
		</div>
	);
};

export default Modal;
