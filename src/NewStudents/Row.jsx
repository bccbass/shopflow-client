import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import FollowUpTable from "./FollowUpTable";
import BookTrialButton from "./BookTrialButton";

function Row({children, row}) {
    const [open, setOpen] = React.useState(false);
  
    return (
      <React.Fragment>
        <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell>
            {new Date(row.nextContactDate).toLocaleString("en-AU", {
              day: "numeric",
              month: "long",
              // year: "numeric",
            })}
          </TableCell>
          <TableCell>{`${row.student.lastName}, ${row.student.firstName}`}</TableCell>
          <TableCell>{`${row.guardian.lastName}, ${row.guardian.firstName}`}</TableCell>
          <TableCell>{row.contact.phone}</TableCell>
          <TableCell>{row.contact.email}</TableCell>
          <TableCell>{row.student.instrument}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            style={{
              paddingBottom: 0,
              paddingTop: 0,
              backgroundColor: "#AFE5E3",
            }}
            colSpan={7}
          >
            <Collapse in={open} timeout="auto">
              <Box sx={{ m: 2 }}>
                <Container
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Box sx={{ py: 2, flex: 2 }}>
                    <Typography
                      variant="h6"
                      gutterBottom
                      color="textSecondary"
                      component="div"
                    >
                      <strong> Enquiry Details </strong>
                    </Typography>
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
                  <Box sx={{ py: 2, flex: 2 }}>
                    <Typography
                      variant="h6"
                      gutterBottom
                      color="textSecondary"
                      component="div"
                    >
                      <strong> Notes </strong>
                    </Typography>
                    <Typography>{row?.notes}</Typography>
                  </Box>
                </Container>
                <FollowUpTable
                  followUpEvents={
                    row.bookedTrial ? row.trialLesson.followUp : row.followUp
                  }
                />
          
                { children }
              </Box>
            </Collapse>
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
  

export default Row