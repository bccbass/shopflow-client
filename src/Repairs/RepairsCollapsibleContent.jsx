/** @format */

import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { localDate } from "../assets/dateHelpers";

const RepairsCollapsibleContent = ({ row }) => {
	return (
		<Container sx={{ p: 1, pb: 4, backgroundColor: "#FAFAFA", width: "100%" }}>
			<Typography
				variant="h6"
				color=""
				component="div"
                sx={{mt: 2}}
			>
				<strong> Repair Details </strong>
			</Typography>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "flex-start",
					width: "100%",
				}}
			>
				<Box sx={{ py: 2, width: "32%" }}>
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
				<Box sx={{ py: 2, width: "32%" }}>
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
				<Box sx={{ py: 2, width: "32%" }}>
					<Typography color="textSecondary">
						<strong> Notes: </strong>
					</Typography>
					<Typography color="textSecondary">
						{row.notes}
					</Typography>
				</Box>
			</Box>
		</Container>
	);
};

export default RepairsCollapsibleContent;
