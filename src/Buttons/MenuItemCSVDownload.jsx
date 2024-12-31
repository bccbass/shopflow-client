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
      "Student First Name": data.student.firstName,
      "Student Last Name": data.student.lastName,
      "Student Email Address": data.isMinor ? "" : data.contact.email,
      "Student Phone Number": data.isMinor ? "" : data.contact.phone,
      instruments: data.student.instrument,
      "Parent First Name": data.guardian.firstName,
      "Parent Last Name": data.guardian.lastName,
      "Parent Email Address": data.isMinor ? data.contact.email : "",
      "Parent Parent Mobile Phone Number": data.isMinor
        ? data.contact.phone
        : "",
    },
  ];

  const csv = generateCsv(csvConfig)(csvData);

  const handleClick = () => download(csvConfig)(csv);

  return (
    <Box onClick={handleClick} sx={{ display: "flex" }}>
      <ListItemIcon>
        <FileDownloadOutlinedIcon fontSize="small" />
      </ListItemIcon>
      <ListItemText>Download</ListItemText>
    </Box>
  );
};

export default MenuItemCSVDownload;
