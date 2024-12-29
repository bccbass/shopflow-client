import * as React from "react";
import PropTypes from "prop-types";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import RowCollapsibleContent from "./RowCollapsibleContent";

function EnquiryRow({ children, row }) {
  const [open, setOpen] = React.useState(false);

  const nullDueDate = new Date(row.nextContactDate) < new Date("2020-01-01");

  const overdueStyles = {
    color: "red",
  };

  return (
    <React.Fragment>
      <TableRow
        sx={{
          "& > *": {
            borderBottom: "unset",
            // backgroundColor: row.overdue ? "pink" : "#AFE5E3",
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
          <span style={row.overdue ? overdueStyles : null}>
            {nullDueDate
              ? ""
              : new Date(row.nextContactDate).toLocaleString("en-AU", {
                  day: "numeric",
                  month: "long",
                  // year: "numeric",
                })}
          </span>
        </TableCell>
        <TableCell>{`${row.studentFullName}`}</TableCell>
        <TableCell align={row.isMinor ? "inherit" : "center"}>
          {row.isMinor ? `${row.guardianFullName}` : "-"}
        </TableCell>
        <TableCell>{row.contact.phone}</TableCell>
        <TableCell>{row.contact.email}</TableCell>
        <TableCell>{row.student.instrument}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell
          style={{
            paddingBottom: 0,
            paddingTop: 0,
          }}
          colSpan={7}
        >
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
