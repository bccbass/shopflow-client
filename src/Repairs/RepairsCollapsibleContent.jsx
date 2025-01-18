/** @format */

import React from "react";
import { useContext } from "react";
import { Box, Container, Typography } from "@mui/material";
import DeleteButton from '../Buttons/DeleteButton'
import AddRepairButton from "./AddRepairButton";
import RepairFormWrapper from "./RepairFormWrapper";
import { localDate } from "../assets/dateHelpers";
import { UserContext } from "../UserContext";


const RepairsCollapsibleContent = ({ row }) => {
	const { user } = useContext(UserContext)
	const overdueStyles = {
		color: "red",
		fontWeight: 'bold'
	};
	return (
		<Container sx={{ p: 1, py: 4, backgroundColor: "#FAFAFA", width: "100%" }}>
			<Typography
				variant="h5"
				color="primary"
				component="div"
                sx={{mb: 2}}
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
						{ `${row.createdBy}  ${localDate(row.dateCreated)}` }
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
					<Typography sx={row.overdue && !row.completed ? overdueStyles : {}} color="textSecondary">
						<strong> Due: </strong>
						{localDate(row.due)}
					</Typography>
				</Box>
				<Box sx={{ py: 2, width: "25%" }}>
		

					<Typography color="textSecondary">
						<strong > Notes: </strong>
						{row.notes}
					</Typography>
				</Box>
			</Box > 
			<Box sx={{width:"100%", display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
				<Typography variant="h6"  
					sx={{mt: 4,
						border: '1px solid',
						borderColor: row.paid ? "green" : "red",
						color: row.paid ? "green" : "red",
						textAlign: 'center',
						py: .5,
						px: 1,
						mb: 2,
						// color: 'white',
						borderRadius: '5px'
					}}  
					>
						<strong> {row.paid ? "Amount Paid:" : "Amount Owed:"} {row.amount && "$"+ row?.amount} </strong>
						
					</Typography>
				<AddRepairButton repair={row}>
					<RepairFormWrapper />
				</AddRepairButton>
			</Box>
			<Box sx={{width:"100%", px: 4, display: 'flex', justifyContent: 'flex-end'}}>

			</Box>
		</Container>
	);
};

export default RepairsCollapsibleContent;
