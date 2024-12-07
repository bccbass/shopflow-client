/** @format */

import React from "react";
import { useEffect, useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";

const getNotes = async () => {
  try {
    const fetchedNotes = await fetch("https://shopflow-api.onrender.com/notes");
	if (!fetchedNotes.ok){ throw new Error(`Response status: ${fetchedNotes.status}`); }
	const json = await fetchedNotes.json();
	return json 
  } catch (err) {
    console.error(err);
  }
};
const Notes = () => {
  const notesQuery = useQuery({ queryKey: ["notes"], queryFn: getNotes });

  if (notesQuery.isLoading) return <h1 className="text-white">Loading...</h1>;
  if (notesQuery.isError) return <h1 className="text-white">Error</h1>;

  return <div className="w-screen h-fit bg-slate-50">
    <h2 className="text-slate-500">Notes</h2>
    <ul>
      {notesQuery.data.map((note) => (
        <li className="flex flex-col w-full p-10">
          <h3>{note.title}</h3>
          <div>{note.body}</div>
        </li>
      ))}
    </ul>
  </div>;
};

export default Notes;
