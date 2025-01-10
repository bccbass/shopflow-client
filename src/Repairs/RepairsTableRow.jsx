/** @format */

import * as React from "react";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import SmsIcon from "@mui/icons-material/Sms";
import RepairsCollapsibleContent from "./RepairsCollapsibleContent";
import { nullDueDate } from "../assets/dateHelpers";
import RepairCompleteToggleButton from "./RepairCompleteToggleButton";
import TogglePaidButton from "./TogglePaidButton";
import RepairRowMenu from "./RepairRowMenu";
import OpenSMSModalButton from '../Buttons/OpenSMSModalButton'

RepairRowMenu
function RepairsTableRow({ row }) {
	const [open, setOpen] = React.useState(false);
	const noDueDate = nullDueDate(row.due);

	const overdueStyles = {
		color: "red",
		fontWeight: 'bold'
	};

	const completedStyles = {
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
					<RepairCompleteToggleButton repair={row} />
				</TableCell>
				<TableCell sx={row.overdue && !row.completed && overdueStyles}>{`${row.lastFirst}`}</TableCell>
				<TableCell sx={row.overdue && !row.completed && overdueStyles}>{row.instrument}</TableCell>
				<TableCell sx={row.overdue && !row.completed && overdueStyles}>{row.jobDescription}</TableCell>
				
				<TableCell>
					< TogglePaidButton repair={row} />
				</TableCell>
				
				<TableCell>
					<a href={"tel:" + row?.phone}>
						<CallIcon fontSize="small" sx={{ ml: 1, color: "grey" }} />
					</a>
				</TableCell>
				{/* <TableCell>
					<a href={"mailto:" + row?.email}>
						<EmailIcon fontSize="small" sx={{ ml: 1, color: "grey" }} />
					</a>
				</TableCell> */}
				<TableCell>
         			<OpenSMSModalButton 
					 	contactNumber={row.phone} 
						recipient={row.firstName}
						customMessage={`Your ${row.instrument ? row.instrument.toLowerCase() : 'instrument'} repair is complete and is ready to be picked up.`}/>
				</TableCell>
				<TableCell >
					< RepairRowMenu repair={row} />
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell sx={{ p: 0 }} colSpan={9}>
					<Collapse in={open} timeout="auto">
						<RepairsCollapsibleContent row={row} />
					</Collapse>
				</TableCell>
			</TableRow>
		</React.Fragment>
	);
}

export default RepairsTableRow;
