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
import ErrorCard from '../ErrorCard'


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
		< Container sx={{mb:20, mx: 0, width: '100vw'}}>
			<SectionHeader
				setSearchParams={ setSearchParams }
				title="Notes"
			/>

             <Box
              sx={{
                width: "90vw",
                display: "flex",
                justifyContent: "flex-end",
                mb: 4,
                pr: 2
              }}
            >
              < Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </Box>
			<Box sx={{display: 'flex', flexWrap: 'wrap', width: '90vw', justifyContent: {xs: 'center', lg: 'flex-start'}}}>
				{notesQuery.isLoading ? (
					<Loading />
				) : notesQuery.isError ? (
					<ErrorCard/>
				) : 
				
					<>
					<NoteForm key={'noteForm'}/>

					{filterArray(notesQuery.data, searchTerm).map((note) => (
							<Note key={note._id} note={note} />
					))}
					</>
				}
			</Box>
		</ Container>
	);
};

export default Notes;
