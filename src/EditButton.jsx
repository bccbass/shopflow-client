import React from 'react'
import Modal from './Modal';
import NoteForm from './NoteForm'
import { useState } from "react";

const EditButton = () => {
    const [modalOpen, setModalOpen] = useState(false)

    const handleClick = ()=>{
			setModalOpen(true)
		};


  return (
		<div>
			<button onClick={handleClick}>Edit</button>
            {modalOpen && <Modal>
                < NoteForm />
            </Modal>}
		</div>
	);
}

export default EditButton