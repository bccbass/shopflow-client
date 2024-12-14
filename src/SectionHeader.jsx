/** @format */

import React from "react";

const SectionHeader = ({ searchParams, title }) => {
	const { sortOrder, setSearchParams } = searchParams;
	const handleSort = (e) => {
		setSearchParams({sort: e.target.name});
	};

	const sortOptions = ["new", "old", "due"];

	return (
		<div className="w-screen">
			<h2 className="text-slate-500 text-left m-8 mb-0 text-5xl border-b-2 ">
				{title}
			</h2>
			<div className="flex mx-6">
				<span className="p-2 font-bold text-sm">sort by: </span>

				{sortOptions.map((option) => (
					<button
						className={`${
							sortOrder === option && "font-bold underline"
						} p-2 text-sm`}
						name={option}
						onClick={handleSort}
					>
						{option}
					</button>
				))}
			</div>
		</div>
	);
};

export default SectionHeader;
