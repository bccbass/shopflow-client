/** @format */

import React from "react";
import { useEffect, useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { getResource } from "./apiHelpers";

const Notes = () => {
  const notesQuery = useQuery({
    queryKey: ["notes"],
    queryFn: () => getResource("notes"),
  });

  // if (notesQuery.isLoading) return <h1 className="text-white">Loading...</h1>;
  // if (notesQuery.isError) return <h1 className="text-white">Error</h1>;

  return (
    <div className="w-screen  min-h-96 bg-slate-50 flex flex-col p-4">
      <h2 className="text-slate-500 text-center">Notes</h2>
      {notesQuery.isLoading ? (
        <h1 className="">Loading...</h1>
      ) : notesQuery.isError ? (
        <h1 className="">Error</h1>
      ) : (
        <ul className="flex flex-row w-full">
          {notesQuery.data.map((note) => (
            <li
              key={note._id}
              className="flex flex-col w-60 m-4 border-slate-200 border-2"
            >
              <h3 className="font-bold bg-slate-200 text-center p-2">
                {note.title}
              </h3>
              <div className="p-2">
                <span className="text-xs">{note.dateCreated}</span>

                <div>{note.body}</div>
                <span>{note.createdBy}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notes;
