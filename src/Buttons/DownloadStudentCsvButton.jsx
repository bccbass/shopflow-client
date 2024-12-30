/** @format */

import React from "react";
import { mkConfig, generateCsv, download } from "export-to-csv";
import { dateStamp } from "../assets/dateHelpers";
import { Box, Button, Tooltip } from "@mui/material";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';


const DownloadStudentCsvButton = ({ data, collection=false }) => {
    const fileName = !collection ? `${data.student.lastName}_${dateStamp}` : `${collection}_${dateStamp}`
    const docTitle = !collection ? `${data.studentFullName} ${dateStamp}` : `${collection} ${dateStamp}`
    const csvConfig = mkConfig({ useKeysAsHeaders: true, filename: fileName, title: docTitle, showTitle: false });

    const csvData = [{studentFirstName: data.student.firstName, studentLastName: data.student.lastName}]

    const csv = generateCsv(csvConfig)(csvData);


    const handleClick = () => download(csvConfig)(csv)

	return (
			<Box
			
				onClick={handleClick}
				// sx={{ px: 2 }}
			>
					<FileDownloadOutlinedIcon color="secondary" /> Download CSV
			
			</Box>
	);
};

export default DownloadStudentCsvButton;
