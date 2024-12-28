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
        width: '30%'
      }}
    >
      <Box sx={{ py: 2, flex: 2, mr:3 }}>
        <Typography
          variant="h6"
          gutterBottom
          color="textSecondary"
          component="div"
        >
          <strong> Enquiry Details </strong>
        </Typography>
        <Typography>
          <strong> Created: </strong>
          {new Date(lead?.dateCreated).toLocaleString("en-AU", {
            day: "numeric",
            month: "numeric",
            year: "numeric",
          })}
        </Typography>
        <Typography>
          <strong> Student: </strong>
          {`${lead.studentFullName}`}
        </Typography>
        {lead.isMinor && (
          <Typography>
            <strong> Parent: </strong>
            {`${lead.guardianFullName}`}
          </Typography>
        )}
        <Typography>
          <strong> Phone: </strong>
          {lead?.contact?.phone}
        </Typography>
        <Typography>
          <strong> Email: </strong>
          {lead?.contact?.email}
        </Typography>
        <Typography>
          <strong> Source: </strong>
          {lead?.leadSource}
        </Typography>
        <Typography>
          <strong>Group Class: </strong>
          {lead.student?.groupClass}
        </Typography>
        <Typography>
          <strong> Age: </strong>
          {lead?.student?.age}
        </Typography>
      </Box>
      <Box
        sx={{
          my: 4,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default EnquiryDetailsCard;