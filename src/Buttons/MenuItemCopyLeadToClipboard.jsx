/** @format */

import React from "react";
import { mkConfig, generateCsv, download } from "export-to-csv";
import { dateStamp } from "../assets/dateHelpers";
import { Box, MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import ContentPasteIcon from '@mui/icons-material/ContentPaste';


const MenuItemCopyLeadToClipboard = ({ data, collection = false }) => {
  const fileName =  `${data.student.lastName}_${dateStamp}`
  const docTitle = `${data.studentFullName} ${dateStamp}`
  const csvConfig = mkConfig({
    useKeysAsHeaders: true,
    filename: fileName,
    title: docTitle,
    showTitle: false,
  });

  const csvData = [
    {
      "Student First Name Only": data.student.firstName,
      "Student Last Name Only": data.student.lastName,
      "Student Email Address": data.isMinor ? "" : data.contact.email,
      "Student Phone Number": data.isMinor ? "" : data.contact.phone,
      Instruments: data.student.instrument,
      "Parent First Name Only": data.guardian.firstName,
      "Parent Last Name Only": data.guardian.lastName,
      "Parent Email": data.isMinor ? data.contact.email : "",
      "Parent Mobile Phone Number": data.isMinor ? data.contact.phone : "",
    },
  ];

  const csvString = `Student First Name Only\tStudent Last Name Only\tStudent Email Address\tStudent Phone Number\tInstruments\tParent First Name Only\tParent Last Name Only\tParent Email\tParent Mobile Phone Number\n${data.student.firstName}\t${data.student.lastName}\t${data.isMinor ? "" : data.contact.email}\t${data.isMinor ? "" : data.contact.phone}\t${data.student.instrument}\t${data.guardian.firstName}\t${data.guardian.lastName}\t${data.isMinor ? data.contact.email : ""}\t${data.isMinor ? data.contact.phone : ""}`;

  const csv = generateCsv(csvConfig)(csvData);
  const handleClick = () => {
    navigator.clipboard.writeText(csvString);
  };

  return (
    <Box onClick={handleClick} sx={{ display: "flex", width: "100%" }}>
      <ListItemIcon>
        <ContentPasteIcon fontSize="small" />
      </ListItemIcon>
      <ListItemText>Copy to Clipboard</ListItemText>
    </Box>
  );
};

export default MenuItemCopyLeadToClipboard;


