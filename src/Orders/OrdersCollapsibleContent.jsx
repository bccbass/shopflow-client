/** @format */

import React from "react";
import { useContext } from "react";
import { Box, Container, Typography, Card, Divider } from "@mui/material";
import TogglePaidButton from "./TogglePaidButton";
import AddOrderButton from "./AddOrderButton";
import OrderFormWrapper from "./OrderFormWrapper";
import { localDate } from "../assets/dateHelpers";
import { UserContext } from "../UserContext";

const OrdersCollapsibleContent = ({ row }) => {
  const { user } = useContext(UserContext);
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
    borderColor: 'primary.main',
    fontWeight: "bold",
    px: 3,
  };

  const overdueStyles = {
    color: "red",
    fontWeight: "bold",
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
            <strong>{`Order Details: ${row.item}`}</strong>
          </Typography>
        </Divider>

        <Box
          sx={{
            px: 3,
            display: "flex",
            alignItems: "flex-start",
            width: "100%",
            justifyContent: "space-around",
          }}
        >
          <Box sx={{ py: 2, width: "25%" }}>
            <Typography color="textSecondary">
              <strong> Name: </strong>
              {`${row.firstLast}`}
            </Typography>
            <Typography color="textSecondary">
              <strong> Phone: </strong>
              <a href={"tel:" + row?.phone}>{row?.phone}</a>
            </Typography>
            <Typography color="textSecondary">
              <strong> Email: </strong>
              <a href={"mailto:" + row?.email}>{row?.email}</a>
            </Typography>
            <Typography
              sx={row.overdue && !row.completed ? overdueStyles : {}}
              color="textSecondary"
            >
              <strong> Due: </strong>
              {localDate(row.due)}
            </Typography>
          </Box>
          <Box sx={{ py: 2, width: "25%" }}>
            <Typography color="textSecondary">
              <strong> Item: </strong>
              {row?.item}
            </Typography>
            <Typography color="textSecondary">
              <strong>Description: </strong>
              {row?.orderDescription}
            </Typography>
            <Typography color="textSecondary">
              <strong> Status: </strong>
              {row?.status}
            </Typography>
            <Typography color="textSecondary">
              <strong> Total Price: </strong>
              {"$" + row.totalAmount}
            </Typography>
          </Box>
          <Box sx={{ py: 2, width: "25%" }}>
            <Typography color="textSecondary">
              <strong> Notes: </strong>
              {row.notes}
            </Typography>
          </Box>
        </Box>
		 
        < TogglePaidButton order={row} verbose={true}/>
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
          <AddOrderButton order={row}>
            <OrderFormWrapper />
          </AddOrderButton>
          <Box id="flex-placeholder" flex={1}></Box>
        </Box>
      </Card>
    </Container>
  );
};

export default OrdersCollapsibleContent;
