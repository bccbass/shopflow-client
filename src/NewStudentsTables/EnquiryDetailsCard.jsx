import React from "react";
import { Box, Typography, Card, Divider, Tooltip, Link } from "@mui/material";
import SearchEmailButton from "../Buttons/SearchEmailButton";

const EnquiryDetailsCard = ({ lead, children }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        // alignItems: "flex-start",
        width: "32%",
      }}
    >
      <Box sx={{ p: 2, flex: 2 }}>
        <Typography
          // align="center"
          variant="h6"
          gutterBottom
          color="textSecondary"
          component="div"
          // sx={{ pb: 1 }}
        >
          <strong> Enquiry Details </strong>
        </Typography>
        <Divider sx={{ mb: 2 }} />
        {/* <Typography>
          <strong> Created: </strong>
          {`${lead.createdDate} By: ${lead.createdBy}`}
        </Typography> */}
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
          <Link href={"sip:" + lead?.contact?.phone}>
            {lead?.contact?.phone}
          </Link>
        </Typography>

        <Typography sx={{ display: "flex" }}>
          <strong style={{ marginRight: "4px" }}> Email: </strong>
          <Link
            target="_blank"
            sx={{ px: 0.5 }}
            href={
              "https://mail.google.com/mail/u/2/#search/" + lead?.contact?.email
            }
          >
            {` ${lead?.contact?.email}`}
          </Link>
          {lead.contact.email && (
            <SearchEmailButton email={lead.contact.email} />
          )}
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
        {lead?.student?.age && (
          <Typography>
            <strong> Age: </strong>
            {lead?.student?.age}
          </Typography>
        )}
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography color="text.secondary" pl={2}>
          {`${lead.createdDate} ${lead.createdBy}`}
        </Typography>
        {children}
      </Box>
    </Card>
  );
};

export default EnquiryDetailsCard;
