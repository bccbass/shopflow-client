import React from "react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { getResource } from "../assets/apiHelpers";
import SectionHeader from "../SectionHeader";
import { Container, Box, Typography, Card, Divider } from "@mui/material";
import ArchiveTable from "./ArchiveTable";
import DownloadCollectionCsvButton from "../Buttons/DownloadCollectionCsvButton";
import Search from "../Search";
import ErrorCard from "../ErrorCard";
import TableSkeleton from "../TableSkeleton";

const ArchivedLeads = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const sortOrder = searchParams.get("sort");
  const archive = useQuery({
    queryKey: ["archive", sortOrder],
    queryFn: () => getResource("archive?sort=" + sortOrder),
  });

  const getAnalytics = (query) => {
    if (!query.isLoading && !query.isError)
      return {
        total: query.data.length,
        totalTrials: query.data.filter((lead) => lead.bookedTrial).length,
        totalEnrollments: query.data.filter((lead) => lead.enrolled).length,
      };
  };

  const analytics = getAnalytics(archive)
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

  return (
    <Container sx={{ m: 0, mb: 10 }}>
      <SectionHeader title="Archived Leads">
        {!archive.isLoading && (
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
        {archive.isLoading ? (
          <TableSkeleton tabs={false} />
        ) : archive.isError ? (
          <ErrorCard />
        ) : (
          <>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                mt: 0,
                mb: 1,
                px: 2,
                justifyContent: "space-between",
                alignItems: 'flex-end'
              }}
            >
              <Card sx={{ display: "flex", flexDirection: "column", p: 3 }}>
                <Typography color="text.secondary" variant="h5">
                  Analytics Snapshot
                </Typography>
                <Divider />
                <Typography>{`Total Leads: ${analytics.total}`}</Typography>
                <Typography>{`Total Trials: ${analytics.totalTrials} (${Math.floor(analytics.totalTrials/analytics.total * 100)}%)`}</Typography>
                <Typography>{`Total Enrollments: ${analytics.totalEnrollments} (${Math.floor(analytics.totalEnrollments/analytics.total * 100)}%)`}</Typography>
              </Card>
              <DownloadCollectionCsvButton
                data={archive.data}
                collection="Archived Leads"
              />
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                mb: 2,
              }}
            ></Box>
            <ArchiveTable
              enquiries={filteredArr(archive.data, searchTerm)}
            ></ArchiveTable>
          </>
        )}
      </Box>
    </Container>
  );
};

export default ArchivedLeads;
