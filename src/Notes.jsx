/** @format */

import React from "react";
import { useEffect, useState } from "react";
import Note from "./Note";
import { useQuery, useMutation } from "@tanstack/react-query";
import NoteForm from "./NoteForm";
import { getResource } from "./assets/apiHelpers";

const Notes = () => {
  const route = "notes";
  const notesQuery = useQuery({
    queryKey: ["notes"],
    queryFn: () => getResource("notes"),
  });

  // if (notesQuery.isLoading) return <h1 className="text-white">Loading...</h1>;
  // if (notesQuery.isError) return <h1 className="text-white">Error</h1>;

  return (
    <div className="w-screen  min-h-96 bg-slate-50 flex flex-col h-full">
      <h2 className="text-slate-500 text-center">Notes</h2>
      {notesQuery.isLoading ? (
        <h1 className="">Loading...</h1>
      ) : notesQuery.isError ? (
        <h1 className="">Error</h1>
      ) : (
        <ul className="flex flex-row w-full flex-wrap">
          {notesQuery?.data?.map((note) => (
            <li
              key={note._id}
            >
    <Note note={note} />
            </li>
          ))}
        </ul>
      )}
      <NoteForm />
    </div>
  );
};

export default Notes;
