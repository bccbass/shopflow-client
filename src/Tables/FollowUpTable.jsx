import * as React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import FollowUpForm from "../Tables/FollowUpForm";
import { Divider } from "@mui/material";

const FollowUpTable = ({ followUpEvents, lead }) => {
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
            <TableCell align="center">Chat</TableCell>
            <TableCell align="center">Voicemail</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Text</TableCell>
            <TableCell sx={{}}>Notes</TableCell>
            <TableCell sx={{}}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {followUpEvents.map((contact) => (
            <TableRow key={contact._id}>
              <TableCell component="th" scope="row">
                {contact.followUpInitDate}
              </TableCell>
              <TableCell sx={{pl: 3.2}}>{contact.admin}</TableCell>
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
              <TableCell></TableCell>
            </TableRow>
          ))}
          < FollowUpForm lead={lead}/>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FollowUpTable;
