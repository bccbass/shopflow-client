import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import { addDays } from '../assets/dateHelpers'
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postResource } from "../assets/apiHelpers";

const NoteForm = () => {
  const blankNote = {
    title: "",
    body: "",
    createdBy: "",
    due: addDays(3),
  };
  
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
    setNote(blankNote);
  };

  return (
    <Box sx={{ minWidth: 275, m: 2, width: 300 }}>
      <Card variant="outlined" sx={{ backgroundColor: "lightblue" }}>
        <CardContent sx={{width: '100%' }}>
          <Typography variant="h5" gutterBottom color='text.secondary'>
            New Note
          </Typography>

          <Box
            component="form"
            sx={{ "& > :not(style)": { m: 1, width: "94%" } }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <TextField
              id="outlined-basic"
              label="Title"
              value={note.title}
              variant="outlined"
              name="title"
              onChange={handleChange}
            />
          </Box>

          <Box
            component="form"
            sx={{ "& > :not(style)": { m: 1, width: "94%" } }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Note"
              value={note.body}
              multiline
              variant="outlined"
              name="body"
              onChange={handleChange}
            />

            <TextField
              id="outlined-basic"
              label="Author"
              value={note.createdBy}
              variant="outlined"
              name="createdBy"
              onChange={handleChange}
            />

            <TextField
              className=" text-slate-400 p-1 rounded-md"
              // label="due"
              helperText="Due Date"
              name="due"
              id="due"
              type="date"
              onChange={handleChange}
              value={note.due}
            />
          <Box sx={{display: 'flex', justifyContent: 'center'}}>
          <Button
            disabled={mutation.isPending}
            variant="outlined"
            sx={{width: '100%'}}
            onClick={handleSubmit}
          >
            Save
          </Button>
          </Box>
          </Box>

        </CardContent>

      </Card>
    </Box>
  );
};

export default NoteForm;
