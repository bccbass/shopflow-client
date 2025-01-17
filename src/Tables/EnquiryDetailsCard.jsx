import React from "react";
import { Box, Typography } from "@mui/material";

const EnquiryDetailsCard = ({ lead, children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        width: "30%",
      }}
    >
      <Box sx={{ pt: 2, flex: 2, mr: 3 }}>
        <Typography
          variant="h6"
          gutterBottom
          color="textSecondary"
          component="div"
          // sx={{ pb: 1 }}
        >
          <strong> Enquiry Details </strong>
        </Typography>
        <Typography>
          <strong> Created: </strong>
          {lead.createdDate}
        </Typography>
        <Typography>
          <strong> Student: </strong>
          {`${lead.studentFullName}`}
        </Typography>
        {lead.student?.instrument && (
          <Typography>
            <strong>Instrument: </strong>
            {lead.student?.instrument}
          </Typography>
        )}
        {lead.isMinor && (
          <Typography>
            <strong> Parent: </strong>
            {`${lead.guardianFullName}`}
          </Typography>
        )}
        <Typography>
          <strong> Phone: </strong>
          <a href={"tel:" + lead?.contact?.phone}>{lead?.contact?.phone}</a>
        </Typography>
        <Typography>
          <strong> Email: </strong>
          <a href={"mailto:" + lead?.contact?.email}>{lead?.contact?.email}</a>
        </Typography>
        <Typography>
          <strong> Source: </strong>
          {lead?.leadSource}
        </Typography>
        {lead.student?.groupClass && (
          <Typography>
            <strong>Group Class: </strong>
            {lead.student?.groupClass}
          </Typography>
        )}
        <Typography>
          <strong> Age: </strong>
          {lead?.student?.age}
        </Typography>
      </Box>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
        {children}
      </Box>
    </Box>
  );
};

export default EnquiryDetailsCard;
