import React from "react";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

const Note = ({ note }) => {
  return (
    <div
      className="flex flex-col w-60 m-4 border-slate-200 shadow-sm border rounded-md dark:bg-gray-700"
    >
      <h3 className="font-bold bg-slate-200 text-center p-2">{note.title}</h3>
      <div className="p-2 flex flex-col">
        <div>{note.body}</div>
        <span className="text-xs text-slate-400 mx-4 self-end">
          -{note.createdBy}
        </span>
        <div className="text-xs">{note.dateCreated}</div>
        <div className="text-xs">{note._id}</div>
      </div>
      < EditButton />
      <DeleteButton path={"notes"} id={note._id} />
    </div>
  );
};

export default Note;
