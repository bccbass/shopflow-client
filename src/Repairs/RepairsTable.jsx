/** @format */

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import RepairsTableRow from "./RepairsTableRow";

export default function RepairsTable({ repairs, children }) {
	const rows = [...repairs];

	return (
		<TableContainer sx={{ mt: 2, mb: 4 }} component={Paper}>
			<Table aria-label="collapsible table">
				<TableHead>
					<TableRow>
						<TableCell />
						<TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
						<TableCell sx={{ fontWeight: "bold" }}>Instrument</TableCell>
						<TableCell sx={{ fontWeight: "bold" }}>Job</TableCell>
						<TableCell sx={{ fontWeight: "bold" }}>Phone</TableCell>
						{/* <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell> */}
						<TableCell sx={{ fontWeight: "bold" }}>Text</TableCell>
						<TableCell sx={{ fontWeight: "bold" }}>Completed</TableCell>
						<TableCell sx={{ fontWeight: "bold" }}>Paid</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<RepairsTableRow key={row._id} row={row}>
							{/* {children} */}
						</RepairsTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
