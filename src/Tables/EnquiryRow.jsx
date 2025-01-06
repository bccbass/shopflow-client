/** @format */

import * as React from "react";
import PropTypes from "prop-types";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import RowCollapsibleContent from "./RowCollapsibleContent";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import SmsIcon from "@mui/icons-material/Sms";
import RowMenu from "./RowMenu";
import { nullDueDate } from "../assets/dateHelpers";
import { smsHref } from "../assets/helperFuncs";

function EnquiryRow({ row }) {
  const [open, setOpen] = React.useState(false);

  const noDueDate = nullDueDate(row.nextContactDate);
  const overdueStyles = {
    color: "red",
    fontWeight: "bold",
  };
  const enrolledStyles = {
    color: "white",
    backgroundColor: "green",
    padding: "4px 6px",
    marginLeft: "-.5rem",
    borderRadius: "6px",
    fontWeight: "bold",
  };

  return (
    <React.Fragment>
      <TableRow
        sx={{
          "& > *": {
            borderBottom: "unset",
          },
        }}
      >
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
          <span
            style={
              row.overdue && !row.enrolled ? overdueStyles : row.enrolled ? enrolledStyles : null
            }
          >
            {noDueDate ? "" : row.enrolled ? "ENROLLED" : row.contactDate}
          </span>
        </TableCell>
        <TableCell>{`${row.studentFullName}`}</TableCell>
        <TableCell align={row.isMinor ? "inherit" : "center"}>
          {row.isMinor ? `${row.guardianFullName}` : ""}
        </TableCell>
        <TableCell>{row.student.instrument}</TableCell>

        <TableCell>
          {" "}
          <a href={"tel:" + row?.contact?.phone}>
            <CallIcon fontSize="small" sx={{ ml: 1, color: "grey" }} />
          </a>
        </TableCell>
        <TableCell>
          {" "}
          <a href={"mailto:" + row?.contact?.email}>
            <EmailIcon fontSize="small" sx={{ ml: 1, color: "grey" }} />
          </a>
        </TableCell>
        <TableCell>
          {" "}
          <a href={smsHref(row)}>
            <SmsIcon fontSize="small" sx={{ ml: 1, color: "grey" }} />
          </a>
        </TableCell>
        {/* CELL TO FOR ACTIONS MENU ICON */}
        <TableCell>
          <RowMenu lead={row} />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell sx={{ p: 0 }} colSpan={9}>
          <Collapse in={open} timeout="auto">
            <RowCollapsibleContent lead={row} />
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

export default EnquiryRow;
