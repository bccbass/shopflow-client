import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ArchiveButton from "../Buttons/ArchiveButton";
import DeleteButton from "../Buttons/DeleteButton";
import ArchiveRowMenu from "./ArchiveRowMenu";
import DisplayMarkdown from "../DisplayMarkdown";


function ArchiveRow({ children, row, openMenuId, onMenuToggle }) {
  const [open, setOpen] = React.useState(false);
  const minorStudent =
    row.guardian.lastName.length > 0 && row.guardian.firstName.length > 0;
  return (
    <React.Fragment>
      <TableRow
        onClick={() => setOpen(!open)}
        sx={{ "& > *": { borderBottom: "unset", backgroundColor: "#dcf2fc" } }}
      >
        <TableCell>
          <IconButton aria-label="expand row" size="small">
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>
          {new Date(row.dateCreated).toLocaleString("en-AU", {
            day: "numeric",
            month: "numeric",
            year: "numeric",
          })}
        </TableCell>
        <TableCell>
          <span
            style={{
              color: "white",
              backgroundColor: row.enrolled
                ? "teal"
                : row.bookedTrial
                ? "orange"
                : "salmon",
              padding: "4px 6px",
              marginLeft: "-.5rem",
              borderRadius: "6px",
              fontWeight: "bold",
            }}
          >
            {row.enrolled ? "Enrolled" : row.bookedTrial ? "Trial" : "No Trial"}
          </span>
        </TableCell>
        <TableCell>{`${row.studentFullName}`}</TableCell>
        <TableCell>{minorStudent ? `${row.guardianFullName}` : ""}</TableCell>
        <TableCell>{row.student.instrument}</TableCell>

        <TableCell>{row.contact.phone}</TableCell>
        <TableCell>{row.contact.email}</TableCell>
        <TableCell>
          <ArchiveRowMenu
            onMenuToggle={onMenuToggle}
            openMenuId={openMenuId}
            lead={row}
          />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell
          style={{
            paddingBottom: 0,
            paddingTop: 0,
          }}
          colSpan={9}
        >
          {open && (
            <Collapse in={open} timeout="auto">
              <Box sx={{ m: 2 }}>
                <Container
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Card
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      // alignItems: "flex-start",
                      width: "30%",
                      color: "grey",
                    }}
                  >
                    <Box sx={{ p: 2, flex: 2 }}>
                      <Typography
                        variant="h6"
                        gutterBottom
                        color="textSecondary"
                        component="div"
                      >
                        <strong> Enquiry Details </strong>
                      </Typography>
                      <Divider sx={{ mb: 2 }} />

                      <Typography>
                        <strong> Student: </strong>
                        {`${row.student.lastName}, ${row.student.firstName}`}
                      </Typography>
                      {minorStudent && (
                        <Typography>
                          <strong> Parent: </strong>
                          {`${row.guardian.lastName}, ${row.guardian.firstName}`}
                        </Typography>
                      )}
                      <Typography>
                        <strong> Phone: </strong>
                        {row?.contact?.phone}
                      </Typography>
                      <Typography>
                        <strong> Email: </strong>
                        {row?.contact?.email}
                      </Typography>
                      <Typography>
                        <strong> Source: </strong>
                        {row?.leadSource}
                      </Typography>
                      <Typography>
                        <strong>Group Class: </strong>
                        {row.student?.groupClass}
                      </Typography>
                      <Typography>
                        <strong> Age: </strong>
                        {row?.student?.age}
                      </Typography>
                    </Box>
                  </Card>
                  <Card
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      color: "grey",
                      width: "30%",
                    }}
                  >
                    <Box sx={{ p: 2, flex: 2 }}>
                      {row.bookedTrial === true ? (
                        <>
                          <Typography
                            variant="h6"
                            gutterBottom
                            color="textSecondary"
                            component="div"
                          >
                            <strong> Trial Lesson </strong>
                          </Typography>
                          <Divider sx={{ mb: 2 }} />

                          <Typography>
                            <strong> date: </strong>
                            {new Date(row?.trialLesson?.date).toLocaleString(
                              "en-AU",
                              {
                                day: "numeric",
                                month: "numeric",
                                year: "numeric",
                              }
                            )}
                          </Typography>
                          <Typography>
                            <strong> Time: </strong>
                            {`${row?.trialLesson?.time?.hour}:${row?.trialLesson?.time?.min}${row?.trialLesson?.time?.twelveHr}`}
                          </Typography>
                          <Typography>
                            <strong> Location: </strong>
                            {row?.trialLesson?.location}
                          </Typography>
                          <Typography>
                            <strong> Instrument: </strong>
                            {row?.trialLesson?.instrument}
                          </Typography>
                          <Typography>
                            <strong> Teacher: </strong>
                            {row?.trialLesson?.teacher}
                          </Typography>
                          {row.trialLesson.groupClass && (
                            <Typography>
                              <strong>Group Class: </strong>
                              {row?.trialLesson?.groupClass}
                            </Typography>
                          )}
                        </>
                      ) : (
                        <>
                          <Typography
                            variant="h6"
                            gutterBottom
                            color="textSecondary"
                            component="div"
                          >
                            <strong> Trial Lesson </strong>
                          </Typography>
                          <Divider sx={{ mb: 2 }} />

                          <Typography
                            sx={{
                              mt: 6,
                              fontWeight: "bold",
                              color: "white",
                              backgroundColor: "cornflowerblue",
                              borderRadius: "10px",
                              width: "fit-content",
                              px: 3,
                              py: 1,
                              mx: "auto",
                            }}
                          >
                            No Trial Booked
                          </Typography>
                        </>
                      )}
                    </Box>
                  </Card>
                  <Card
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      color: "grey",
                      width: "30%",
                    }}
                  >
                    <Box sx={{ p: 2, flex: 2 }}>
                      <Typography
                        variant="h6"
                        gutterBottom
                        color="textSecondary"
                        component="div"
                      >
                        <strong> Notes </strong>
                      </Typography>
                      <Divider sx={{ mb: 2 }} />
                      <DisplayMarkdown note={row?.notes}/>
                    </Box>
                  </Card>
                </Container>

                {children}
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                  p: 4,
                }}
              >
                <ArchiveButton
                  reactivate={true}
                  id={row._id}
                  bookedTrial={row.bookedTrial}
                />
                <DeleteButton id={row._id} path="archive" />
              </Box>
            </Collapse>
          )}
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

// Row.propTypes = {
//   row: PropTypes.shape({
//     calories: PropTypes.number.isRequired,
//     carbs: PropTypes.number.isRequired,
//     fat: PropTypes.number.isRequired,
//     history: PropTypes.arrayOf(
//       PropTypes.shape({
//         amount: PropTypes.number.isRequired,
//         customerId: PropTypes.string.isRequired,
//         date: PropTypes.string.isRequired,
//       }),
//     ).isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     protein: PropTypes.number.isRequired,
//   }).isRequired,
// };

export default ArchiveRow;
