/** @format */

import React from "react";
import { useState } from "react";
import Note from "./Note";
import Loading from "../Loading";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import NoteForm from "./NoteForm";
import { getResource } from "../assets/apiHelpers";
import SectionHeader from "../SectionHeader";

const Notes = () => {
	const queryClient = useQueryClient();

	const [sortOrder, setSortOrder] = useState(null);
	const notesQuery = useQuery({
		queryKey: ["notes", sortOrder],
		queryFn: () => getResource("notes?sort=" + sortOrder),
	});

	return (
		<div className="w-screen  min-h-96 bg-slate-50 flex flex-col h-full">
			<SectionHeader sortState={{ setSortOrder, sortOrder }} title="Notes" />

			{notesQuery.isLoading ? (
				<Loading />
			) : notesQuery.isError ? (
				<h1 className="">Error</h1>
			) : (
				<ul className="flex flex-row w-full flex-wrap">
					<li>
						<NoteForm />
					</li>
					{notesQuery?.data?.map((note) => (
						<li key={note._id}>
							<Note note={note} />
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Notes;
