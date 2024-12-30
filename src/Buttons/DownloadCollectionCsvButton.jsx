/** @format */

import React from "react";
import { mkConfig, generateCsv, download } from "export-to-csv";
import { dateStamp } from "../assets/dateHelpers";
import { Button, Tooltip, Box } from "@mui/material";


const DownloadCollectionCsvButton = ({ data, collection=false }) => {
    const fileName = `${collection}_${dateStamp}`
    const csvConfig = mkConfig({ useKeysAsHeaders: true, filename: fileName, title: fileName, showTitle: false });

    const csvData = data.map(d => {
      return { 
          dateCreated: d.dateCreated,
          studentFirstName: d.student.firstName,
        studentLastName: d.student.lastName,
          isChild: d.isMinor,

        instrument: d.student.instrument,
        age: d.student.age,
        guardianFirstName: d.guardian.firstName,
        guardianLastName: d.guardian.lastName,
        phone: d.contact.phone,
        email: d.contact.email,
        groupClass: d.groupClass,
        trialLesson: d.bookedTrial,
        enrolled: d.enrolled,
        followUpContact: d.followUp.length + d.trialLesson.followUp.length,
        trialTeacher: d.trialLesson.teacher,
        trialDate: d.trialLesson.date
    }
    })
    
    const csv = generateCsv(csvConfig)(csvData);


    const handleClick = () => download(csvConfig)(csv)

	return (
        < Box  sx={{width: '100%', display: 'flex', justifyContent: 'flex-end', mb: 4}}>
		<Tooltip title={`Download ${collection} CSV` }>
			<Button 
                variant="outlined"
				onClick={handleClick}
				sx={{ px: 2 }}
			>
					Download CSV
			
			</Button>
		</Tooltip>
        </Box>
	);
};

export default DownloadCollectionCsvButton;
