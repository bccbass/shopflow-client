/** @format */

import * as React from "react";
import { useContext } from "react";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import RowCollapsibleContent from "./RowCollapsibleContent";
import CallButton from "../Buttons/CallButton";
import RowMenu from "./RowMenu";
import OpenEmailModalButton from "../Buttons/OpenEmailModalButton";
import EmailForm from "../EmailForm";
import { nullDate } from "../assets/dateHelpers";
import OpenSMSModalButton from "../Buttons/OpenSMSModalButton";
import { UserContext } from "../UserContext";

function EnquiryRow({ row, info }) {
  const { user } = useContext(UserContext);
  const [open, setOpen] = React.useState(false);
  const noDueDate = nullDate(row.nextContactDate);


  const enrolledStyles = {
    color: "white",
    backgroundColor:
      row.enrolledAdminProgress == "none"
        ? "red"
        : row.enrolledAdminProgress == "in-progress"
        ? "orange"
        : "teal",
    padding: "4px 6px",
    // marginLeft: "-.5rem",
    borderRadius: "6px",
    fontWeight: "bold",
  };
  const dateStyles = {
    color: "white",
    backgroundColor:
      row.overdue || (row.trialAdminProgress == "none" && row.bookedTrial)
        ? "red"
        : row.bookedTrial && row.trialAdminProgress == "in-progress"
        ? "orange"
        : "teal",
    padding: "4px 6px",
    // marginLeft: "-.5rem",
    borderRadius: "6px",
    fontWeight: "bold",
  };

  const rowActionContent = (row) => {
    let enrolled;
    if (row.enrolled) {
      enrolled =
        row.enrolledAdminProgress == "complete" ? "Complete" : "Incomplete";
    }
    return row.enrolled ? enrolled : noDueDate ? "None" : row.contactDate;
  };

  return (
    <React.Fragment>
      <TableRow
        onClick={() => setOpen(!open)}
        sx={{
          "& > *": {
            borderBottom: "unset",
          },
        }}
      >
        <TableCell>
          <IconButton aria-label="expand row" size="small">
            {open ? <  KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell >
          <span style={row.enrolled ? enrolledStyles : dateStyles}>
            {rowActionContent(row)}
          </span>
        </TableCell>
        <TableCell>{`${row.studentFullName}`}</TableCell>
        <TableCell>{row.isMinor ? `${row.guardianFullName}` : ""}</TableCell>
        <TableCell>{row.student.instrument}</TableCell>

        <TableCell>
          <CallButton phoneNumber={row.contact.phone} />
        </TableCell>
        <TableCell>
          <OpenEmailModalButton dataObj={row} email={row.contact.email}>
            <EmailForm student={row} info={info} />
          </OpenEmailModalButton>
        </TableCell>
        <TableCell>
          <OpenSMSModalButton
            admin={user.firstName}
            contactNumber={row.contact.phone}
            recipient={
              row.isMinor ? row.guardian.firstName : row.student.firstName
            }
          />
        </TableCell>
        <TableCell>
          <RowMenu lead={row} />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell sx={{ p: 0 }} colSpan={9}>
          <Collapse in={open} timeout="auto">
            {open && <RowCollapsibleContent lead={row} />}
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default EnquiryRow;
