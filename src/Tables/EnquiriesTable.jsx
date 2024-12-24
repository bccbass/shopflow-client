import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EnquiryRow from "./EnquiryRow";

export default function EnquiriesTable({ enquiries, children }) {
  const rows = [...enquiries]

  return (
    <TableContainer sx={{mt: 2, mb: 10}} component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell sx={{ fontWeight: "bold", color: "red", width: 120 }}>
              Next Action
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Student</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Parent</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Phone</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Instrument</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            
            <EnquiryRow key={row._id} row={row}>
              {children}
            </EnquiryRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
