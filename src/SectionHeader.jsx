/** @format */

import React from "react";
import { Box, Typography, Button, ButtonGroup } from '@mui/material'

const SectionHeader = ({ searchParams, title }) => {
	const { sortOrder, setSearchParams } = searchParams;
	const handleSort = (e) => {
		setSearchParams({sort: e.target.name});
	};

	const sortOptions = ["new", "old", "due"];

	return (
		<Box sx={{ mx: 2, my: 4 }}>
			<Typography variant="h4" color="primary">
				{title}
			</Typography>
			<Box sx={{display: 'flex', alignContent: '', height: 15, my:1}}>
				<Typography>sort by: </Typography>
				<ButtonGroup variant="text" size="small" sx={{mt: 1.2, mx: 1}}>
					{sortOptions.map((option) => (
						<Button key={option} name={option} onClick={handleSort}>
							{option}
						</Button>
					))}
				</ButtonGroup>
			</Box>
		</Box>
	);
};

export default SectionHeader;
