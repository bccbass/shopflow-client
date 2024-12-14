import React from "react";
import DeleteButton from "../DeleteButton";
import EditButton from "../EditButton";
import NoteEditCard from "./NoteEditCard";
import NoteCard from "./NoteCard";
import { useState } from "react";

const Note = ({ note }) => {
  const today = new Date();
  const [editingNote, setEditingNote] = useState(false);
  const toggleEdit = () => setEditingNote(!editingNote)
  return (
    <div >
{      !editingNote ? 
< NoteCard note={note} toggleEdit={toggleEdit} />
:
      <NoteEditCard note={note} toggleEdit={toggleEdit} />}
    </div>
  );
};

export default Note;
