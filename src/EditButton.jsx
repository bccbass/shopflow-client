import React from "react";
import Modal from "./Modal";
import NoteForm from "./NoteForm";
import { useState } from "react";

const EditButton = ({ toggleEdit }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <span
      className={`w-fit rounded-md p-1 m-1 text-red-700 hover:text-red-400 transition-all`}
      onClick={toggleEdit}
    >
      edit
    </span>
  );
};

export default EditButton;
