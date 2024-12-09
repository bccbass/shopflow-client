import React from "react";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import NoteEditCard from "./NoteEditCard";
import { useState } from "react";

const Note = ({ note }) => {
  const [editingNote, setEditingNote] = useState(true);
  const toggleEdit = () => setEditingNote(!editingNote)
  return (
    <div className="flex flex-col w-60 m-4 border-slate-200 shadow-sm border rounded-md dark:bg-gray-700">
{      editingNote ? 
     <div>
        <h3 className="font-bold bg-slate-200 text-center p-2">{note.title}</h3>
        <div className="p-2 flex flex-col">
          <div className="p-1">{note.body}</div>
          <span className="text-xs text-slate-400 mx-4 self-end">
            -{note.createdBy}
          </span>
          <div className="text-xs">created: {new Date(note.dateCreated).toLocaleString('en-AU')}</div>
          <div className="text-xs">due: {note.due}</div>
        </div>
        <EditButton toggleEdit={toggleEdit} />
        <DeleteButton path={"notes"} id={note._id} />
      </div> :
      <NoteEditCard note={note} toggleEdit={toggleEdit} />}
    </div>
  );
};

export default Note;
