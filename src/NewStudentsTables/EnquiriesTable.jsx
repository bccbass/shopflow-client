import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EnquiryRow from "./EnquiryRow";
import TablePaginationFooter from "../TablePaginationFooter";


export default function EnquiriesTable({ enquiries, children, info, page, setPage }) {
  const rows = [...enquiries];
   const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const emptyRows =
      page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  

  return (
    <TableContainer sx={{ width: "100%" }} component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell sx={{ fontWeight: "bold", width: 120 }}>
              Next Action
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Student</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Parent</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Instrument</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Phone</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Text</TableCell>
            {/* BLANK CELL TO ACCOMODATE ACTIONS ICON */}
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
        {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <EnquiryRow key={row._id} row={row} info={info}>
              {children}
            </EnquiryRow>
          ))}
           {emptyRows > 0 && (
            <TableRow style={{ height: 70 * emptyRows }}>
              <TableCell colSpan={9} />
            </TableRow>
          )}
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
