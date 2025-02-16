import React from "react";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { getResource } from "../assets/apiHelpers";
import SectionHeader from "../SectionHeader";
import {
  Badge,
  Container,
  Box,
  Typography,
  Button,
  Card,
  Divider,
} from "@mui/material";
import EnquiriesTable from "../NewStudentsTables/EnquiriesTable";
import DownloadCollectionCsvButton from "../Buttons/DownloadCollectionCsvButton";
import Search from "../Search";
import ErrorCard from "../ErrorCard";
import TableSkeleton from "../TableSkeleton";

const NewStudents = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const activeView = searchParams.get("view") || "enquiries";
  const [page, setPage] = React.useState(0);

  useEffect(() => {
    setPage(0);
  }, [searchParams]);

  const leadsQuery = useQuery({
    queryKey: ["leads"],
    queryFn: () => getResource("leads"),
  });
  
  const {
    isLoading,
    isError,
    data: overdue,
  } = useQuery({
    queryKey: ["due"],
    queryFn: () => getResource("leads/due"),
  });

  const filteredArr = (arr, searchTerm) => {
    return searchTerm.length == 0
      ? arr
      : arr.filter((lead) =>
          [
            lead.studentFullName,
            lead.guardianFullName,
            lead.trialLesson.instrument,
            lead.student.instrument,
          ]
            .map((name) =>
              name?.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .includes(true)
        );
  };

  const utilsQuery = useQuery({
    queryKey: ["utils"],
    queryFn: () => getResource("utils?resource=info"),
  });

  const activeStyles = {
    fontSize: "1rem",
    width: "33.33%",
    border: "1px solid lightgrey",
    borderRadius: "8px 8px 0 0",
    fontWeight: "bold",
    borderBottom: 0,
    backgroundColor: "white",
  };

  const inactiveStyles = {
    fontSize: "1rem",
    width: "33.33%",
    border: "1px solid lightgrey",
    fontWeight: "bold",

    borderRadius: "8px 8px 0 0",
    borderBottom: "1px solid lightgrey",
    color: "lightgrey",
    backgroundColor: "#FAFAFA",
  };

  const enquiriesData =
    !leadsQuery.isLoading && !leadsQuery.error
      ? leadsQuery.data.filter((lead) => !lead.bookedTrial && !lead.enrolled)
      : [];
  const trialBookedData =
    !leadsQuery.isLoading && !leadsQuery.error
      ? leadsQuery.data.filter((lead) => lead.bookedTrial && !lead.enrolled)
      : [];
  const enrolledData =
    !leadsQuery.isLoading && !leadsQuery.error
      ? leadsQuery.data.filter((lead) => lead.enrolled)
      : [];

  return (
    <Container sx={{ width: "100vw", m: 0, pb: 16 }}>
      <SectionHeader title="New Students">
        {!leadsQuery.isLoading && (
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
        {leadsQuery.isLoading || utilsQuery.isLoading ? (
          <TableSkeleton buttons={3} />
        ) : leadsQuery.isError || utilsQuery.isError ? (
          <ErrorCard />
        ) : (
          <>
            <Box
              sx={{
                width: "100%",
                border: "1px solid lightgrey",
                borderTop: 0,
                borderRadius: "8px",
                z: 20,
              }}
            >
              <Box sx={{ width: "100%" }}>
                <Button
                  color="secondary"
                  onClick={() => setSearchParams({ view: "enquiries" })}
                  style={{ borderLeft: 0 }}
                  sx={
                    activeView === "enquiries" ? activeStyles : inactiveStyles
                  }
                >
                  {`Enquiries`}
                  <Badge
                    sx={{ ml: 2.5, mb: 0 }}
                    color={activeView === "enquiries" ? "secondary" : ""}
                    badgeContent={isLoading || isError ? "" : overdue.enquiries}
                  ></Badge>
                </Button>
                <Button
                  color="secondary"
                  onClick={() => setSearchParams({ view: "triallessons" })}
                  style={
                    activeView !== "triallessons"
                      ? { borderLeft: 0, borderRight: 0 }
                      : {}
                  }
                  sx={
                    activeView === "triallessons"
                      ? activeStyles
                      : inactiveStyles
                  }
                >
                  {`Trial Lessons`}
                  <Badge
                    sx={{ ml: 2.5, mb: 0 }}
                    color={activeView === "triallessons" ? "secondary" : ""}
                    badgeContent={isLoading || isError ? "" : overdue.trials}
                  ></Badge>
                </Button>
                <Button
                  color="secondary"
                  style={{ borderRight: 0 }}
                  onClick={() => setSearchParams({ view: "enrolled" })}
                  sx={activeView === "enrolled" ? activeStyles : inactiveStyles}
                >
                  {`Enrolled `}
                  <Badge
                    sx={{ ml: 2.5, mb: 0 }}
                    color={activeView === "enrolled" ? "secondary" : ""}
                    badgeContent={isLoading || isError ? "" : overdue.enrolled}
                  ></Badge>
                </Button>
              </Box>
              {activeView === "triallessons" ? (
                <EnquiriesTable
                  enquiries={filteredArr(trialBookedData, searchTerm)}
                  info={utilsQuery.data}
                  page={page}
                  setPage={setPage}
                />
              ) : activeView === "enquiries" ? (
                <EnquiriesTable
                  enquiries={filteredArr(enquiriesData, searchTerm)}
                  info={utilsQuery.data}
                  page={page}
                  setPage={setPage}
                />
              ) : (
                <EnquiriesTable
                  enquiries={filteredArr(enrolledData, searchTerm)}
                  info={utilsQuery.data}
                  page={page}
                  setPage={setPage}
                />
              )}
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                mr: 4,
                mt: 4,
              }}
            >
              {/* <Card sx={{ display: "flex", flexDirection: "column", p: 3 }}>
                <Typography color="text.secondary" variant="h5">
                  Analytics Snapshot
                </Typography>
                <Divider />
                <Typography>{`Total Leads: ${analytics.total}`}</Typography>
                <Typography>{`Total Trials: ${
                  analytics.totalTrials
                } (${Math.floor(
                  (analytics.totalTrials / analytics.total) * 100
                )}%)`}</Typography>
                <Typography>{`Total Enrollments: ${
                  analytics.totalEnrollments
                } (${Math.floor(
                  (analytics.totalEnrollments / analytics.total) * 100
                )}%)`}</Typography>
                <Typography>{`Trial Conversion Rate: ${Math.floor(
                  (analytics.totalEnrollments / analytics.completedTrials) * 100
                )}%`}</Typography>
              </Card> */}
              <DownloadCollectionCsvButton
                collection="Leads"
                data={leadsQuery.data}
              />
            </Box>
          </>
        )}
      </Box>
    </Container>
  );
};

export default NewStudents;
