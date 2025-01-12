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
import CallButton from "../Buttons/CallButton";
import CallIcon from "@mui/icons-material/Call";
import SmsIcon from "@mui/icons-material/Sms";
import RowMenu from "./RowMenu";
import OpenEmailModalButton from "../Buttons/OpenEmailModalButton";
import EmailForm from "../EmailForm";
import { nullDate } from "../assets/dateHelpers";
import { smsHref } from "../assets/helperFuncs";
import OpenSMSModalButton from "../Buttons/OpenSMSModalButton";

function EnquiryRow({ row, info }) {
  const [open, setOpen] = React.useState(false);

  const noDueDate = nullDate(row.nextContactDate);
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
        sx={{"& > *": {
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
        <TableCell >
          {row.isMinor ? `${row.guardianFullName}` : ""}
        </TableCell>
        <TableCell>{row.student.instrument}</TableCell>

        <TableCell>
         < CallButton phoneNumber={row.contact.phone}/>
        </TableCell>
        <TableCell>
          < OpenEmailModalButton dataObj={row} email={row.contact.email} >
              <EmailForm student={row} info={info}/>
          </OpenEmailModalButton>
        </TableCell>
        <TableCell>
         <OpenSMSModalButton contactNumber={row.contact.phone} recipient={row.isMinor ? row.guardian.firstName : row.student.firstName}/>
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
