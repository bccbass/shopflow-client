/** @format */

import React from "react";
import { mkConfig, generateCsv, download } from "export-to-csv";
import { dateStamp } from "../assets/dateHelpers";
import { Box, MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

const MenuItemCSVDownload = ({ data, collection = false }) => {
  const fileName = !collection
    ? `${data.student.lastName}_${dateStamp}`
    : `${collection}_${dateStamp}`;
  const docTitle = !collection
    ? `${data.studentFullName} ${dateStamp}`
    : `${collection} ${dateStamp}`;
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
      "Parent Mobile Phone Number": data.isMinor
        ? data.contact.phone
        : "",
    },
  ];

  const csv = generateCsv(csvConfig)(csvData);

  const handleClick = () => download(csvConfig)(csv);

  return (
    <Box onClick={handleClick} sx={{ display: "flex", width: '100%' }}>
      <ListItemIcon>
        <FileDownloadOutlinedIcon fontSize="small" />
      </ListItemIcon>
      <ListItemText >Download</ListItemText>
    </Box>
  );
};

export default MenuItemCSVDownload;
