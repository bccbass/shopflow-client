/** @format */

import React from "react";
import { useEffect, useState } from "react";
import Note from "./Note";
import Loading from "./Loading";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import NoteForm from "./NoteForm";
import { getResource } from "./assets/apiHelpers";

const Notes = () => {
  const queryClient = useQueryClient();

  const [sortOrder, setSortOrder] = useState(null);
  const notesQuery = useQuery({
    queryKey: ["notes", sortOrder],
    queryFn: () => getResource("notes?sort=" + sortOrder),
  });

  const handleSort = (e) => {
    setSortOrder(e.target.name);
  };

  return (
    <div className="w-screen  min-h-96 bg-slate-50 flex flex-col h-full">
      <div>
        <h2 className="text-slate-500 text-left m-8 text-5xl border-b-2 ">
          Notes
        </h2>
        <button name={"new"} onClick={handleSort}>
          Newest
        </button>
        <button name={"old"} onClick={handleSort}>
          Oldest
        </button>
        <button name={"due "} onClick={handleSort}>
          Due Now
        </button>
      </div>
      {notesQuery.isLoading ? (
        <Loading />
      ) : notesQuery.isError ? (
        <h1 className="">Error</h1>
      ) : (
        <ul className="flex flex-row w-full flex-wrap">
          {notesQuery?.data?.map((note) => (
            <li key={note._id}>
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
