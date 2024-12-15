import React from "react";
import DeleteButton from "../DeleteButton";
import EditButton from "../EditButton";
import NoteEditCard from "./NoteEditCard";
import NoteCard from "./NoteCard";
import { useState } from "react";

const Note = ({ note }) => {
  const today = new Date();
  const [editingNote, setEditingNote] = useState('');
  const toggleEdit = (id='') => setEditingNote(id)
  return (
    <div >
{      note._id === editingNote ? 
      <NoteEditCard note={note} setEditingNote={setEditingNote} /> :
< NoteCard note={note} setEditingNote={setEditingNote} />

 } </div>
  );
};

export default Note;
