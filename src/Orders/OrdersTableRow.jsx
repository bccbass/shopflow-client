/** @format */

import * as React from "react";
import { useContext } from "react";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CallIcon from "@mui/icons-material/Call";
import OrdersCollapsibleContent from "./OrdersCollapsibleContent";
import OrderCompleteToggleButton from "./OrderCompleteToggleButton";
import TogglePaidButton from "./TogglePaidButton";
import OrderRowMenu from "./OrderRowMenu";
import OpenSMSModalButton from "../Buttons/OpenSMSModalButton";
import { UserContext } from "../UserContext";

OrderRowMenu;
function OrdersTableRow({ row, openMenuId, onMenuToggle }) {
  const { user } = useContext(UserContext);
  const [open, setOpen] = React.useState(false);

  const overdueStyles = {
    color: "error.main",
    fontWeight: "bold",
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
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>
          <OrderCompleteToggleButton order={row} />
        </TableCell>
        <TableCell
          sx={(row.overdue && !row.completed ) || !row.paid? overdueStyles : {}}
        >{`${row.firstLast}`}</TableCell>
        <TableCell sx={(row.overdue && !row.completed ) || !row.paid? overdueStyles : {}}>
          {row.item}
        </TableCell>
        {/* <TableCell sx={(row.overdue && !row.completed ) || !row.paid? overdueStyles : {}}>
          {row.orderDescription}
        </TableCell> */}

        <TableCell>
          <TogglePaidButton order={row} />
        </TableCell>
        <TableCell sx={(row.overdue && !row.completed ) || !row.paid? overdueStyles : {}}>
          {`$${row.totalAmount}`}
        </TableCell>
        <TableCell sx={(row.overdue && !row.completed ) || !row.paid? overdueStyles : {}}>
          {`${row.status}`}
        </TableCell>
        <TableCell>
          <a href={"SIP:" + row?.phone}>
            <CallIcon fontSize="small" sx={{ ml: 1, color: "grey" }} />
          </a>
        </TableCell>
        <TableCell>
          <OpenSMSModalButton
            contactNumber={row.phone}
            recipient={row.firstName}
            admin={user.firstName}
            customMessage={`Your order is complete and is ready for pickup.`}
          />
        </TableCell>
        <TableCell>
          <OrderRowMenu
            order={row}
            onMenuToggle={onMenuToggle}
            openMenuId={openMenuId}
          />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell sx={{ p: 0, m: 0 }} colSpan={10}>
          <Collapse in={open} timeout="auto" sx={{ bgcolor: "primary.main" }}>
            <OrdersCollapsibleContent row={row} />
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default OrdersTableRow;
