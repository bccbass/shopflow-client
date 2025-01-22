import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ArchiveRow from "./ArchiveRow";

export default function ArchiveTable({ enquiries, children }) {
  const rows = [...enquiries]

  return (
		<TableContainer sx={{ mt: 2 }} component={Paper}>
			<Table aria-label="collapsible table">
				<TableHead sx={{backgroundColor: '#0599fc'}}>
					<TableRow sx={{color: 'white'}}>
						<TableCell />
						<TableCell sx={{ fontWeight: "bold", pl: 4, color: 'white' }}>From</TableCell>
						<TableCell sx={{ fontWeight: "bold", pl: 4, color: 'white' }}>Status</TableCell>
						<TableCell sx={{ fontWeight: "bold", color: 'white' }}>Student</TableCell>
						<TableCell sx={{ fontWeight: "bold", color: 'white' }}>Parent</TableCell>
						<TableCell sx={{ fontWeight: "bold", color: 'white' }}>Instrument</TableCell>
						<TableCell sx={{ fontWeight: "bold", color: 'white' }}>Phone</TableCell>
						<TableCell sx={{ fontWeight: "bold", color: 'white' }}>Email</TableCell>
						<TableCell sx={{ fontWeight: "bold", color: 'white' }}></TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<ArchiveRow key={row._id} row={row}>
							{children}
						</ArchiveRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
