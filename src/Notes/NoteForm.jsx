import React from "react";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postResource } from "../assets/apiHelpers";

const NoteForm = () => {
  const blankNote = {
    title: "",
    body: "",
    createdBy: "",
    due: "",
  }

  const [note, setNote] = useState(blankNote);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: postResource,
    onSuccess: () => {
      queryClient.invalidateQueries(["notes"]);
    },
  });

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutation.mutate({ path: "notes", body: note });
    if (mutation.isSuccess){setNote(blankNote)}
  };

  return (
		<form className=" flex flex-col space-y-2 flex-nowrap p-4 border border-slate-300 max-w-96 bg-slate-200 rounded-md m-4">
			<h3 className="text-center text-blue-900">New Note</h3>
			<div className="flex flex-col flex-nowrap space-y-2">
				<label htmlFor="title">Title: </label>
				<input
					maxLength={80}
					className="rounded-md p-1"
					name="title"
					id="title"
					type="text"
					onChange={handleChange}
					value={note.title}
				/>
				<label htmlFor="body">Note: </label>
				<textarea
					className="rounded-md p-1"
					rows={5}
					maxLength={600}
					name="body"
					id="body"
					type="textarea"
					onChange={handleChange}
					value={note.body}
				/>
				<label htmlFor="createdBy">created by: </label>
				<input
					className="rounded-md p-1"
					name="createdBy"
					id="createdBy"
					type="text"
					onChange={handleChange}
					value={note.createdBy}
				/>
				<label htmlFor="due">due: </label>
				<input
					className=" text-slate-400 p-1 rounded-md"
					name="due"
					id="due"
					type="date"
					onChange={handleChange}
					value={note.due}
				/>

				<button
					disabled={mutation.isPending}
					onClick={handleSubmit}
					className={`bg-white border-spacing-1 w-fit self-center border-1 border-blue-200 hover:bg-slate-100 ${
						mutation.isPending && "text-slate-200"
					}`}
				>
					save
				</button>
			</div>
		</form>
	);
};

export default NoteForm;
