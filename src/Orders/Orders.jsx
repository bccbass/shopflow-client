import React from "react";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { getResource } from "../assets/apiHelpers";
import SectionHeader from "../SectionHeader";
import { Container, Box, Typography, Button } from "@mui/material";
import AddOrderButton from "./AddOrderButton";
import OrderFormWrapper from "./OrderFormWrapper";
import OrdersTable from "./OrdersTable";
import DownloadCollectionCsvButton from "../Buttons/DownloadCollectionCsvButton";
import Search from "../Search";
import ErrorCard from "../ErrorCard";
import TableSkeleton from "../TableSkeleton";

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const inProgress = searchParams.get("view") !== "completed";
  const [page, setPage] = React.useState(0);

  useEffect(() => {
    setPage(0);
  }, [searchParams]);

  const ordersQuery = useQuery({
    queryKey: ["orders"],
    queryFn: () => getResource("orders"),
  });

  const leftStyles = {
    fontSize: "1rem",
    width: "50%",
    border: "1px solid lightgrey",
    borderLeft: 0,
    borderRadius: "8px 8px 0 0",
    fontWeight: inProgress ? "bold" : "",
    borderBottom: !inProgress ? "1px solid lightgrey" : 0,
    color: !inProgress ? "lightgrey" : "",
    backgroundColor: !inProgress ? "#FAFAFA" : "white",
  };
  const rightStyles = {
    fontSize: "1rem",
    width: "50%",
    border: "1px solid lightgrey",
    borderRight: 0,
    borderRadius: "8px 8px 0 0",
    fontWeight: !inProgress ? "bold" : "",
    borderBottom: inProgress ? "1px solid lightgrey" : 0,
    color: inProgress ? "lightgrey" : "",
    backgroundColor: inProgress ? "#FAFAFA" : "white",
  };

  const filterArray = (arr, searchTerm) => {
    return searchTerm.length == 0
      ? arr
      : arr.filter((order) =>
          [
            order.firstName,
            order.lastName,
            order.item,
            order.notes,
            order.orderDescription,
          ]
            .map((val) => val?.toLowerCase().includes(searchTerm.toLowerCase()))
            .includes(true)
        );
  };

  const completedOrders =
    !ordersQuery.isLoading && !ordersQuery.error
      ? ordersQuery.data.filter((order) => order.completed)
      : [];

  const activeOrders =
    !ordersQuery.isLoading && !ordersQuery.error
      ? ordersQuery.data.filter((order) => !order.completed)
      : [];

  return (
    <Container sx={{ m: 0, pb: 12 }}>
      <SectionHeader title="Orders">
        {!ordersQuery.isLoading && (
          <Search
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            setPage={setPage}
          />
        )}
      </SectionHeader>
      <Box
        sx={{
          display: "flex",
          mx: "auto",
          px: { sm: "1rem", lg: "4rem", xl: "12rem" },
          width: "90vw",
          flexWrap: "wrap",
        }}
      >
        {ordersQuery.isLoading ? (
          <TableSkeleton />
        ) : ordersQuery.isError ? (
          <ErrorCard />
        ) : (
          <>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                mb: 4,
                pr: 2,
              }}
            >
              <AddOrderButton>
                <OrderFormWrapper />
              </AddOrderButton>
            </Box>
            <Box
              sx={{
                width: "100%",
                border: "1px solid lightgrey",
                borderTop: 0,
                borderRadius: "6px",
                z: 20,
              }}
            >
              <Box sx={{ width: "100%" }}>
                <Button
                  color="secondary"
                  onClick={() => {
                    setSearchParams({ view: "inprogress" });
                  }}
                  sx={leftStyles}
                >
                  In Progress
                </Button>
                <Button
                  color="secondary"
                  onClick={() => {
                    setSearchParams({ view: "completed" });
                  }}
                  sx={rightStyles}
                >
                  Completed
                </Button>
              </Box>

              <OrdersTable
                page={page}
                setPage={setPage}
                orders={filterArray(
                  inProgress ? activeOrders : completedOrders,
                  searchTerm
                )}
              />
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                mt: 4,
                mb: 5,
                mr: 4,
                justifyContent: "flex-end",
              }}
            >
              <DownloadCollectionCsvButton
                collection="Orders"
                data={ordersQuery.data}
                format="orders"
              />
            </Box>
          </>
        )}
      </Box>
    </Container>
  );
};

export default Orders;
