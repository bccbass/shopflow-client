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
import TablePaginationFooter from "../TablePaginationFooter";

export default function RepairsTable({ repairs, page, setPage }) {
  const rows = [...repairs];
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const [openMenuId, setOpenMenuId] = React.useState(null);

  const onMenuToggle = (id) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  return (
    <TableContainer sx={{ mt: 0, mb: 0 }} component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: "4.1rem" }} />
            <TableCell sx={{ fontWeight: "bold" }}>Completed</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Instrument</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Job</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>
              {/* <span style={{ color: "green" }}>Paid</span> /{" "}
              <span style={{ color: "red" }}>Owed</span> */}
              Paid/Owed
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Phone</TableCell>
            {/* <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell> */}
            <TableCell sx={{ fontWeight: "bold" }}>Text</TableCell>
            <TableCell sx={{ width: "5.8rem" }}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <RepairsTableRow onMenuToggle={onMenuToggle} openMenuId={openMenuId} key={row._id} row={row} />
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
