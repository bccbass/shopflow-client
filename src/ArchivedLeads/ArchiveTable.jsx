import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ArchiveRow from "./ArchiveRow";
import TablePaginationFooter from "../TablePaginationFooter";

export default function ArchiveTable({ enquiries, page, setPage, children }) {
  const rows = [...enquiries];
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <TableContainer sx={{ mt: 2 }} component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead sx={{ backgroundColor: "#0599fc" }}>
          <TableRow sx={{ color: "white" }}>
            <TableCell />
            <TableCell sx={{ fontWeight: "bold", pl: 4, color: "white" }}>
              From
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", pl: 4, color: "white" }}>
              Status
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", color: "white" }}>
              Student
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", color: "white" }}>
              Parent
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", color: "white" }}>
              Instrument
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", color: "white" }}>
              Phone
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", color: "white" }}>
              Email
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", color: "white" }}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <ArchiveRow key={row._id} row={row}>
              {children}
            </ArchiveRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 69 * emptyRows }}>
              <TableCell colSpan={9} />
            </TableRow>
          )}
          {/* {rows.map((row) => (
            <ArchiveRow key={row._id} row={row}>
              {children}
            </ArchiveRow>
          ))} */}
        </TableBody>
        <TablePaginationFooter
          count={rows.length}
          page={page}
          setPage={setPage}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
		  colSpan={9}
        />
      </Table>
    </TableContainer>
  );
}
