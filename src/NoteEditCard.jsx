import React from "react";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchResource } from "./assets/apiHelpers";
const NoteEditCard = ({ note, toggleEdit }) => {

  const [updatedNote, setUpdatedNote] = useState({
    title: note.title,
    body: note.body,
    due: note.due.split('T')[0] ,
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: patchResource,
    onSuccess: () => queryClient.invalidateQueries(["notes"], toggleEdit()),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutation.mutate({ path: `notes/${note._id}`, body: updatedNote });
    if (mutation.isSuccess) {
      toggleEdit();
    }
  };

  const handleChange = (e) => {
    setUpdatedNote({ ...updatedNote, [e.target.name]: e.target.value });
};
  return (
    <div>
      <h3 className="font-bold bg-slate-200 text-center p-2">Edit Note...</h3>
      <form className="flex flex-col space-y-2 flex-nowrap p-2 border bg-slate-200">
        <div className="flex flex-col flex-nowrap space-y-2">
          <label htmlFor="title"></label>
          <input
            className="rounded-md p-1 font-bold"
            name="title"
            id="title"
            type="text"
            onChange={handleChange}
            value={updatedNote.title}
          />
          <label htmlFor="body"></label>
          <textarea
            className="rounded-md p-1"
            rows={updatedNote.body.length / 30}
            name="body"
            id="body"
            type="textarea"
            onChange={handleChange}
            value={updatedNote.body}
          />

          <label htmlFor="due"> </label>
          <input
            className=" text-slate-400 p-1 rounded-md"
            name="due"
            id="due"
            type="date"
            onChange={handleChange}
            value={updatedNote.due}
          />

          <button
            // disabled={mutation.isPending}
            onClick={handleSubmit}
          >
            update
          </button>
          <span
            onClick={toggleEdit}
            className="underline text-center hover:text-slate-400 transition-all"
          >
            cancel
          </span>
        </div>
      </form>
    </div>
  );
};

export default NoteEditCard;
