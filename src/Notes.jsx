/** @format */

import React from "react";
import { useEffect, useState } from "react";

const Notes = () => {
	const [notes, setNotes] = useState([]);

	useEffect(() => {
		const getNotes = async () => {
			const fetchedNotes = await fetch(
				"https://shopflow-api.onrender.com/notes"
			);
			const parsed = await fetchedNotes.json();
			setNotes(parsed);
		};
		getNotes();
	}, [notes]);

	return (
		<div className="w-screen h-fit bg-slate-50">
			<h2 className="text-slate-500">Notes</h2>
			<ul>
				{notes.map((note) => (
					<div className="flex flex-col w-full p-10">
						<h3>{note.title}</h3>
						<div>{note.body}</div>
					</div>
				))}
			</ul>
		</div>
	);
};

export default Notes;
