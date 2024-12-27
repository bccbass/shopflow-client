import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DeleteButton from "../CRUDButtons/DeleteButton";
import EditButton from "../CRUDButtons/EditButton";
import Chip from '@mui/material/Chip'
import Divider from "@mui/material/Divider";
const today = new Date();

export default function NoteCard({ note, setEditingNote }) {
  return (
		<Box sx={{ minWidth: 275, m: 2, width: 300 }}>
			<Card variant="outlined" sx={{ backgroundColor: note.overdue && "pink" }}>
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

					<Typography
						sx={{ minHeight: 65  }}
						variant="h5"
						component="div"
					>
						{note.title}
					</Typography>
					<Typography sx={{ my: 1.5, minHeight: 128 }} variant="body2">
						{note.body}
					</Typography>
					<Divider />

					<Typography sx={{ color: "text.secondary", fontSize: 14, mt: 1.5 }}>
						Author: {note.createdBy}
					</Typography>
					{note.due != null && (
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
							sx={{ my: 2 }}
						/>
					)}
				</CardContent>
				<CardActions sx={{}}>
					<EditButton id={note._id} setEditingNote={setEditingNote} />
					<DeleteButton path="notes" id={note._id} />
				</CardActions>
			</Card>
		</Box>
	);
}
