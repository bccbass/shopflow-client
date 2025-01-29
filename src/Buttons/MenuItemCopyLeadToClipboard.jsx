/** @format */

import React from "react";
import { Box, MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";

const MenuItemCopyLeadToClipboard = ({ data }) => {
  const csvString = `Student First Name Only\tStudent Last Name Only\tStudent Email Address\tStudent Phone Number\tInstruments\tParent First Name Only\tParent Last Name Only\tParent Email\tParent Mobile Phone Number\n${
    data.student.firstName
  }\t${data.student.lastName}\t${data.isMinor ? "" : data.contact.email}\t${
    data.isMinor ? "" : data.contact.phone
  }\t${data.student.instrument}\t${data.guardian.firstName}\t${
    data.guardian.lastName
  }\t${data.isMinor ? data.contact.email : ""}\t${
    data.isMinor ? data.contact.phone : ""
  }`;

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
