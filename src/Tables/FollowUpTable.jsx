import * as React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";

const FollowUpTable = ({ followUpEvents }) => {
  return (
    <TableContainer sx={{ mb: 0 }}>
      <Divider sx={{ my: 2.5 }} />
      <Typography
        variant="h6"
        gutterBottom
        color="textSecondary"
        component="div"
        sx={{ mx: 2 }}
      >
        <strong> Follow Up Details </strong>
      </Typography>
      <Table size="small" aria-label="follow-up">
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: "20%" }}>Date</TableCell>
            <TableCell>Admin</TableCell>
            <TableCell>Chat</TableCell>
            <TableCell>Voicemail</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Text</TableCell>
            <TableCell sx={{ width: "37%" }}>Notes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {followUpEvents.map((contact) => (
            <TableRow key={contact._id}>
              <TableCell component="th" scope="row">
                {contact.followUpInitDate}
              </TableCell>
              <TableCell>{contact.admin}</TableCell>
              <TableCell align="center" sx={{ color: "green" }}>
                {contact.method?.chat === true ? "✓" : ""}
              </TableCell>
              <TableCell align="center" sx={{ color: "green" }}>
                {contact.method?.voicemail === true ? "✓" : ""}
              </TableCell>
              <TableCell align="center" sx={{ color: "green" }}>
                {contact.method?.email === true ? "✓" : ""}
              </TableCell>
              <TableCell align="center" sx={{ color: "green" }}>
                {contact.method?.text === true ? "✓" : ""}
              </TableCell>
              <TableCell>{contact?.notes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FollowUpTable;
