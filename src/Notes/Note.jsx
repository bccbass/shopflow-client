import React from "react";
import DeleteButton from "../DeleteButton";
import EditButton from "../EditButton";
import NoteEditCard from "./NoteEditCard";
import { useState } from "react";

const Note = ({ note }) => {
  const today = new Date();
  const twDue = 'bg-red-400 text-slate-50  border border-red-600'
  const [editingNote, setEditingNote] = useState(false);
  const toggleEdit = () => setEditingNote(!editingNote)
  return (
    <div className={`flex flex-col w-60 m-4 border-slate-200 shadow-sm border rounded-md `}>
{      !editingNote ? 
     <div>
        <h3 className={`font-bold bg-slate-200 text-center p-2 ${Date.parse(note.due) < today && twDue}`}>{note.title}</h3>
        <div className="p-2 flex flex-col">
          <div className="p-1">{note.body}</div>
          <span className="text-xs text-slate-400 mx-4 self-end">
            -{note.createdBy}
          </span>
          <div className="text-xs">created: {new Date(note.dateCreated).toLocaleString('en-AU')}</div>
          <div className="text-xs text-red-700 font-bold">due: {new Date(note.due).toLocaleString('en-AU')}</div>
        </div>
        <EditButton toggleEdit={toggleEdit} />
        <DeleteButton path={"notes"} id={note._id} />
      </div> :
      <NoteEditCard note={note} toggleEdit={toggleEdit} />}
    </div>
  );
};

export default Note;
