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
  const isEnrollAdminIncomplete = Object.values(row.enrolledAdmin).includes(
    false
  );
  const isAdminNotStarted = !Object.values(row.enrolledAdmin).includes(
    true
  );

  const overdueStyles = {
    color: "red",
    fontWeight: "bold",
  };

  const enrolledStyles = {
    color: "white",
    backgroundColor: isAdminNotStarted ? "red" : isEnrollAdminIncomplete ? "orange" : "teal",
    padding: "4px 6px",
    marginLeft: "-.5rem",
    borderRadius: "6px",
    fontWeight: "bold",
  };

  const rowActionContent = (row) => {
    let enrolled;
    if (row.enrolled) {
      enrolled = isEnrollAdminIncomplete ? "Incomplete" : "Complete";
    }
    return row.enrolled ? enrolled : noDueDate ? "" : row.contactDate;
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
              row.overdue && !row.enrolled
                ? overdueStyles
                : row.enrolled
                ? enrolledStyles
                : null
            }
          >
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
            <RowCollapsibleContent lead={row} />
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default EnquiryRow;
