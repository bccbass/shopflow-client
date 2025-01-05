/** @format */

import React from "react";
import { Box, Container, Typography } from "@mui/material";
import DeleteButton from '../Buttons/DeleteButton'
import AddRepairButton from "./AddRepairButton";
import RepairFormWrapper from "./RepairFormWrapper";
import { localDate } from "../assets/dateHelpers";


const RepairsCollapsibleContent = ({ row }) => {
	return (
		<Container sx={{ p: 1, pb: 4, backgroundColor: "#FAFAFA", width: "100%" }}>
			<Typography
				variant="h5"
				color="primary"
				component="div"
                sx={{my: 2}}
				textAlign='center'
			>
				<strong> {`Repair Details: ${row.instrument} ${row.jobDescription}`} </strong>
			</Typography>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-around",
					alignItems: "flex-start",
					width: "100%",
				}}
			>
				<Box sx={{ py: 2, width: "25%" }}>
					<Typography color="textSecondary" >
						<strong> Created: </strong>
						{localDate(row.dateCreated)}
					</Typography>
					<Typography color="textSecondary">
						<strong> Name: </strong>
						{`${row.firstLast}`}
					</Typography>
					<Typography color="textSecondary">
						<strong> Phone: </strong>
						<a href={"tel:" + row?.phone}>{row?.phone}</a>
					</Typography>
					<Typography color="textSecondary">
						<strong> Email: </strong>
						<a href={"mailto:" + row?.email}>{row?.email}</a>
					</Typography>
				</Box>
				<Box sx={{ py: 2, width: "25%" }}>
					<Typography color="textSecondary">
						<strong> Instrument: </strong>
						{row?.instrument}
					</Typography>
					<Typography color="textSecondary">
						<strong>Job: </strong>
						{row?.jobDescription}
					</Typography>
					<Typography color="textSecondary">
						<strong> Status: </strong>
						{row?.status}
					</Typography>
					<Typography color="textSecondary">
						<strong> Due: </strong>
						{localDate(row.due)}
					</Typography>
				</Box>
				<Box sx={{ py: 2, width: "25%" }}>
					<Typography color="textSecondary">
						<strong> Notes: </strong>
					</Typography>
					<Typography color="textSecondary">
						{row.notes}
					</Typography>
				</Box>
			</Box > 
			<Box sx={{width:"100%", px: 4, display: 'flex', justifyContent: 'flex-end'}}>
			<AddRepairButton repair={row}>
				<RepairFormWrapper />
			</AddRepairButton>
			< DeleteButton id={row._id} path='repairs' />
			</Box>
		</Container>
	);
};

export default RepairsCollapsibleContent;
