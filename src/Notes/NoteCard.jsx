import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DeleteButton from "../DeleteButton";
import EditButton from "../EditButton";

const today = new Date();

export default function NoteCard({ note, setEditingNote }) {
  const overdue = today > new Date(note.due);
  return (
    <Box sx={{ minWidth: 275, m: 2, width: 300 }}>
      <Card variant="outlined" sx={{ backgroundColor: overdue && "pink" }}>
        {" "}
        <CardContent>
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 12 }}
          >
            {new Date(note.dateCreated).toLocaleString("en-AU", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}{" "}
          </Typography>
          <Typography variant="h5" component="div">
            {note.title}
          </Typography>

          <Typography sx={{ my: 1.5 }} variant="body2">
            {note.body}
          </Typography>
          <Typography sx={{ color: "text.secondary", fontSize: 14, mt: 1.5 }}>
            Author: {note.createdBy}
          </Typography>
          {note.due != null && (
            <Typography
              sx={{ color: "red", background: 'white', width: 100, borderRadius: '5px', p: .5, my: 1.5, fontSize: 14, fontWeight: "bold" }}
            >
              Due:
              {new Date(note.due).toLocaleString("en-AU", {
                day: "numeric",
                month: "numeric",
              })}
            </Typography>
          )}
        </CardContent>
        <CardActions
        sx={{}}>
          <EditButton id={note._id} setEditingNote={setEditingNote} />
          <DeleteButton path="notes" id={note._id} />
        </CardActions>
      </Card>
    </Box>
  );
}
