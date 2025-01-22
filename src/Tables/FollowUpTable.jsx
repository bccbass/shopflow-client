import * as React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import FollowUpForm from "./FollowUpForm";
import SubmitUpdateButton from "../Buttons/SubmitUpdateButton";
import CheckIcon from "@mui/icons-material/Check";
import { Divider } from "@mui/material";

const FollowUpTable = ({ followUpEvents, lead }) => {
  const checkStyles = {
    color: "green",
    fontSize: "1.2rem",
    fontWeight: "bold",
  };

  const cellTitleStyles = { fontWeight: "bold" };
  return (
    <Box
      sx={{
        bgcolor: "teal",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          bgcolor: "white",

          p: 3,
          my: 3,
          width: "96%",
          borderRadius: "5px",
          display: "flex",
          flexDirection: "column",
          border: "1px solid silver",
        }}
      >
        <TableContainer sx={{ mb: 0 }}>
          <Typography
            color="text.secondary"
            align="center"
            variant="h5"
            fontWeight={"bold"}
          >
            Follow Up History
          </Typography>
          <Divider sx={{ mt: 1, mb: 2.5 }} />

          <Table size="small" aria-label="follow-up">
            <TableHead>
              <TableRow>
                <TableCell sx={cellTitleStyles}>Contact Date</TableCell>
                <TableCell sx={cellTitleStyles}>Admin</TableCell>
                <TableCell sx={cellTitleStyles} align="center">
                  Call
                </TableCell>
                <TableCell sx={cellTitleStyles} align="center">
                  Chat
                </TableCell>
                <TableCell sx={cellTitleStyles} align="center">
                  Voicemail
                </TableCell>
                <TableCell sx={cellTitleStyles} align="center">
                  Email
                </TableCell>

                <TableCell sx={cellTitleStyles}>Notes</TableCell>
                <TableCell sx={cellTitleStyles}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {followUpEvents.map((contact) => (
                <TableRow key={contact._id}>
                  <TableCell
                    sx={{ color: "dimgray" }}
                    component="th"
                    scope="row"
                  >
                    {contact.followUpInitDate}
                  </TableCell>
                  <TableCell sx={{ pl: 3.2, color: "dimgray" }}>
                    {contact.admin}
                  </TableCell>
                  <TableCell align="center" sx={checkStyles}>
                    {contact.method?.call === true ? <CheckIcon /> : ""}
                  </TableCell>
                  <TableCell align="center" sx={checkStyles}>
                    {contact.method?.chat === true ? <CheckIcon /> : ""}
                  </TableCell>
                  <TableCell align="center" sx={checkStyles}>
                    {contact.method?.voicemail === true ? <CheckIcon /> : ""}
                  </TableCell>
                  <TableCell align="center" sx={checkStyles}>
                    {contact.method?.email === true ? <CheckIcon /> : ""}
                  </TableCell>

                  <TableCell>{contact?.notes}</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              ))}
              <FollowUpForm lead={lead} />
            </TableBody>
          </Table>
        </TableContainer>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            mt: 4,
          }}
        >
          <SubmitUpdateButton
            submitProps={{
              redirect: `/newstudents?view=enrolled`,
              updatedData: { enrolled: !lead.enrolled },
              path: "leads/updatetrial/" + lead._id,
              variant: "contained",
              type: "patch",
              title: `${lead.enrolled ? "Unenroll" : "Enroll"} ${
                lead.studentFullName
              }`,
            }}
          />
        </Box>
      </Card>
    </Box>
  );
};

export default FollowUpTable;
