import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DeleteButton from "../Buttons/DeleteButton";
import EditButton from "../Buttons/EditButton";
import Chip from '@mui/material/Chip'
import Divider from "@mui/material/Divider";
import CompletedToggleButton from './CompletedToggleButton'

export default function NoteCard({ note, setEditingNote }) {
  return (
		<Box sx={{ minWidth: 275, m: 2, width: 300 }}>
			<Card
				variant="outlined"
				sx={{ backgroundColor: note.overdue && !note.completed && "pink", height: "446px", overflowY: 'scroll' }}
			>
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
					<Divider sx={{ mb: 1.5 }} />

					<Typography sx={{ minHeight: 65 }} variant="h5" component="div">
						{note.title}
					</Typography>
					<Typography sx={{ my: 1.5, minHeight: 160 }} variant="body2">
						{note.body}
					</Typography>
					<Divider />

					<Typography sx={{ color: "text.secondary", fontSize: 14, mt: 1.5 }}>
						Author: {note.createdBy}
					</Typography>
					{!note.completed ? (
						<Chip
							label={
								"Due: " +
								new Date(note.due).toLocaleString("en-AU", {
									day: "numeric",
									month: "numeric",
								})
							}
							variant={note.overdue ? "" : "outlined"}
							color="error"
							sx={{ mt: 1.5 }}
						/>
					) : (
						<Chip label="Completed" color="success" sx={{ mt: 1.5 }} />
					)}
				</CardContent>
				<CardActions sx={{width: '100%', display: 'flex', justifyContent: 'space-around'}}>
					<EditButton id={note._id} setEditingNote={setEditingNote} />
					<CompletedToggleButton note={note}/>
					<DeleteButton path="notes" id={note._id} />
				</CardActions>
			</Card>
		</Box>
	);
}
