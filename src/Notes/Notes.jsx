import React from "react";
import { useState } from 'react'
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { getResource } from "../assets/apiHelpers";
import Note from "./Note";
import Loading from "../Loading";
import NoteForm from "./NoteForm";
import SectionHeader from "../SectionHeader";
import Search from '../Search'
import { Box, Container } from "@mui/material";

const Notes = () => {
	const [searchParams, setSearchParams] = useSearchParams();
  const [ searchTerm, setSearchTerm ] = useState('')
	const sortOrder = searchParams.get("sort");
	const notesQuery = useQuery({
		queryKey: ["notes", sortOrder],
		queryFn: () => getResource("notes?sort=" + sortOrder),
	});

const filterArray = (arr, searchTerm) => {
    return searchTerm.length == 0 ?
      arr :
      arr.filter(note => [note.body, note.title, note.createdBy]
      .map(val => val.toLowerCase().includes(searchTerm.toLowerCase()))
        .includes(true)
    )
  }

	return (
		< Container sx={{mb:20}}>
			<SectionHeader
				setSearchParams={ setSearchParams }
				title="Notes"
			/>

             <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                mb: 4,
                pr: 2
              }}
            >
              < Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </Box>
			<Box sx={{display: 'flex', flexWrap: 'wrap'}}>
				<NoteForm key={'noteForm'}/>
				{notesQuery.isLoading ? (
					<Loading />
				) : notesQuery.isError ? (
					<h1 className="">Error</h1>
				) : (
					filterArray(notesQuery.data, searchTerm).map((note) => (
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
