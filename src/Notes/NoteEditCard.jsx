import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchResource } from "../assets/apiHelpers";

const NoteEditCard = ({ note, setEditingNote }) => {
  const [updatedNote, setUpdatedNote] = useState({
    title: note.title,
    body: note.body,
    due: note?.due?.split("T")[0],
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: patchResource,
    onSuccess: () => queryClient.invalidateQueries(["notes"], setEditingNote()),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutation.mutate({ path: `notes/${note._id}`, body: updatedNote });
    if (mutation.isSuccess) {
      setEditingNote();
    }
  };

  const handleChange = (e) => {
    setUpdatedNote({ ...updatedNote, [e.target.name]: e.target.value });
  };
  return (
    <Box sx={{ minWidth: 275, m: 2, width: 300 }}>
      <Card variant="outlined" sx={{ backgroundColor: "lightblue" }}>
        {" "}
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Editing note...
          </Typography>
          <Box
            component="form"
            sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <TextField
              id="outlined-basic"
              label="Title"
              value={updatedNote.title}
              variant="outlined"
              name="title"
              onChange={handleChange}
            />

            <TextField
              id="outlined-basic"
              label="Note"
              value={updatedNote.body}
              multiline
              variant="outlined"
              name="body"
              onChange={handleChange}
            />
          <Typography sx={{ color: "text.secondary", fontSize: 14, my: 1.5 }}>
            Author: {note.createdBy}
          </Typography>
          <TextField
            className=" text-slate-400 p-1 rounded-md"
            label="due"
            name="due"
            id="due"
            type="date"
            onChange={handleChange}
            value={updatedNote.due}

          />
          
          <Button variant="outlined" sx={{ flex: 1 }} onClick={handleSubmit}>
            Save
          </Button>
          <Button
            variant="text"
            sx={{ color: "red" }}
            onClick={() => setEditingNote()}
          >
            cancel
          </Button>
          </Box>

        </CardContent>

      </Card>
    </Box>
  );
};

export default NoteEditCard;
