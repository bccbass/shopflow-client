import React from "react";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { postResource } from "./assets/apiHelpers";
import axios from "axios";

const NoteForm = () => {
  const [note, setNote] = useState({
    title: "",
    body: "",
    createdBy: "",
    due: "",
  });

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://shopflow-api.onrender.com/notes", note);
      console.log('response', response);
    } catch (err) {
      alert(err);
      console.error(err);
    }
  };

  return (
    <form   className="flex flex-col space-y-2 flex-nowrap p-4 border border-slate-300 max-w-96 bg-slate-200 rounded-md m-8">
      <h3 className="text-center text-blue-900">New Note</h3>
      <div className="flex flex-col flex-nowrap space-y-2">
        <label htmlFor="title">Title: </label>
        <input className="rounded-md p-1" name="title" id="title" type="text" onChange={handleChange} />
        <label htmlFor="body">Note: </label>
        <input className="rounded-md p-1" name="body" id="body" type="text" onChange={handleChange} />
        <label htmlFor="createdBy">created by: </label>
        <input
        className="rounded-md p-1"
          name="createdBy"
          id="createdBy"
          type="text"
          onChange={handleChange}
        />
        <label htmlFor="due">due: </label>
        <input className=" text-slate-400 p-1 rounded-md" name="due" id="due" type="date" onChange={handleChange} />
      
        <button onClick={handleSubmit} className="bg-white border-spacing-1 w-fit self-center border-1 border-blue-200 hover:bg-slate-100">save</button>
      </div>
    </form>
  );
};

export default NoteForm;
