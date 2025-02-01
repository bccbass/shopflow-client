/** @format */

import React from "react";
import { useContext } from "react";
import { Box, Container, Typography, Card, Divider } from "@mui/material";
import TogglePaidButton from "./TogglePaidButton";
import AddRepairButton from "./AddRepairButton";
import RepairFormWrapper from "./RepairFormWrapper";
import { localDate } from "../assets/dateHelpers";
import { UserContext } from "../UserContext";
import { nullDate } from "../assets/dateHelpers";

const RepairsCollapsibleContent = ({ row }) => {
  const { user } = useContext(UserContext);
  const noDueDate = nullDate(row.due);

  const overdueStyles = {
    color: "red",
    fontWeight: "bold",
  };

  const dividerStyles = {
    px: 2,
    // pt: 8,
    // pb: 4,
    my: 3,
    width: "100%",
    "&::before, &::after": {
      borderColor: "primary.main",
    },
  };

  const titleStyles = {
    color: "primary.main",
    borderRadius: "10px",
    border: "1px solid",
    borderColor: "primary.main",
    fontWeight: "bold",
    px: 3,
  };

  return (
    <Container
      sx={{
        bgcolor: "primary.main",
        p: 3,
        // py: 3,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          // my: 4,
        }}
      >
        <Divider sx={dividerStyles}>
          <Typography
            sx={titleStyles}
            align="center"
            variant="h5"
            fontWeight={"bold"}
          >
            <strong>{`${row.instrument}  ${row.jobDescription}`}</strong>
          </Typography>
        </Divider>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          <Box sx={{ py: 2, width: "25%" }}>
            <Typography color="textSecondary">
              <strong> Name: </strong>
              {`${row.firstLast}`}
            </Typography>
            <Typography color="textSecondary">
              <strong> Phone: </strong>
              <a href={"sip:" + row?.phone}>{row?.phone}</a>
            </Typography>
            <Typography color="textSecondary">
              <strong> Email: </strong>

              <a
                target="_blank"
                href={"https://mail.google.com/mail/u/1/#search/" + row?.email}
              >
                {row?.email}
              </a>
            </Typography>
            <Typography
              sx={row.overdue && !row.completed ? overdueStyles : {}}
              color="textSecondary"
            >
              <strong> Due: </strong>
              {noDueDate ? "No Due Date" : localDate(row.due)}
            </Typography>
          </Box>
          <Box sx={{ py: 2, width: "25%" }}>
            <Typography color="textSecondary">
              <strong> Instrument: </strong>
              {row?.instrument}
            </Typography>
            <Typography color="textSecondary">
              <strong>Job: </strong>
              {row?.jobDescription}
            </Typography>
            <Typography color="textSecondary">
              <strong> Status: </strong>
              {row?.status}
            </Typography>
          </Box>
          <Box sx={{ py: 2, width: "25%" }}>
            <Typography color="textSecondary">
              <strong> Notes: </strong>
              {row.notes}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TogglePaidButton repair={row} verbose={true} />
        </Box>
        <Box
          sx={{
            py: 1,
            px: 4,
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            flex={1}
            sx={{ fontSize: ".9rem", fontStyle: "italic" }}
            color="textSecondary"
          >
            {`${row.createdBy}  ${localDate(row.dateCreated)}`}
          </Typography>
          <AddRepairButton repair={row}>
            <RepairFormWrapper />
          </AddRepairButton>
          <Box id="flex-placeholder" flex={1}></Box>
        </Box>
      </Card>
    </Container>
  );
};

export default RepairsCollapsibleContent;
