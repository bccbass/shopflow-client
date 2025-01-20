import React from "react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { getResource } from "../assets/apiHelpers";
import SectionHeader from "../SectionHeader";
import {
  Container,
  Box,
  Typography,
  Button,
  Card,
  Divider,
} from "@mui/material";
import EnquiriesTable from "../Tables/EnquiriesTable";
import DownloadCollectionCsvButton from "../Buttons/DownloadCollectionCsvButton";
import Search from "../Search";
import ErrorCard from "../ErrorCard";
import TableSkeleton from "../TableSkeleton";

const NewStudents = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const activeView = searchParams.get("view") || "enquiries";
  const leadsQuery = useQuery({
    queryKey: ["leads"],
    queryFn: () => getResource("leads"),
  });

  const getAnalytics = (query) => {
    if (!query.isLoading && !query.isError)
      return {
        total: query.data.length,
        totalTrials: query.data.filter((lead) => lead.bookedTrial).length,
        totalEnrollments: query.data.filter((lead) => lead.enrolled).length,
      };
  };

  const analytics = getAnalytics(leadsQuery)

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
              name.toLowerCase().includes(searchTerm.toLowerCase())
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
    // borderLeft: activeView == "enquiries" ? 0 : "",
    borderRadius: "8px 8px 0 0",
    fontWeight: "bold",
    borderBottom: 0,
  };

  const inactiveStyles = {
    fontSize: "1rem",
    width: "33.33%",
    border: "1px solid lightgrey",
    // borderRight: activeView == "triallessons" ? 0 : "",
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
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
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
          <TableSkeleton />
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
                  onClick={() => setSearchParams({ view: "enquiries" })}
                  style={{ borderLeft: 0 }}
                  sx={
                    activeView === "enquiries" ? activeStyles : inactiveStyles
                  }
                >{`Enquiries (${enquiriesData.length})`}</Button>
                <Button
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
                >{`Trial Lessons (${trialBookedData.length})`}</Button>
                <Button
                  style={{ borderRight: 0 }}
                  onClick={() => setSearchParams({ view: "enrolled" })}
                  sx={activeView === "enrolled" ? activeStyles : inactiveStyles}
                >{`Enrolled (${enrolledData.length})`}</Button>
              </Box>
              {activeView === "triallessons" ? (
                <EnquiriesTable
                  enquiries={filteredArr(trialBookedData, searchTerm)}
                  info={utilsQuery.data}
                />
              ) : activeView === "enquiries" ? (
                <EnquiriesTable
                  enquiries={filteredArr(enquiriesData, searchTerm)}
                  info={utilsQuery.data}
                />
              ) : (
                <EnquiriesTable
                  enquiries={filteredArr(enrolledData, searchTerm)}
                  info={utilsQuery.data}
                />
              )}
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                mr: 4,
                mt: 4,
              }}
            >
              <Card sx={{ display: "flex", flexDirection: "column", p: 3 }}>
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
              </Card>
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
