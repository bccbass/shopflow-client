import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { getResource } from "../assets/apiHelpers";
import Note from "./Note";
import Loading from "../Loading";
import NoteForm from "./NoteForm";
import SectionHeader from "../SectionHeader";
import { Box, Container } from "@mui/material";

const Notes = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const sortOrder = searchParams.get("sort");
	const notesQuery = useQuery({
		queryKey: ["notes", sortOrder],
		queryFn: () => getResource("notes?sort=" + sortOrder),
	});

	return (
		< Container >
			<SectionHeader
				setSearchParams={ setSearchParams }
				title="Notes"
			/>
			<Box sx={{display: 'flex', w: '100vw', flexWrap: 'wrap'}}>
				<NoteForm />
				{notesQuery.isLoading ? (
					<Loading />
				) : notesQuery.isError ? (
					<h1 className="">Error</h1>
				) : (
					notesQuery?.data?.map((note) => (
						<Box key={note._id}>
							<Note note={note} />
						</Box>
					))
				)}
			</Box>
		</ Container>
	);
};

export default Notes;
