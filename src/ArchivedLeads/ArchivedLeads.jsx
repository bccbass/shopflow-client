import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { getResource } from "../assets/apiHelpers";
import SectionHeader from "../SectionHeader";
import { Container, Box, Typography } from "@mui/material";
import ArchiveTable from "./ArchiveTable";

const ArchivedLeads = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortOrder = searchParams.get("sort");
  const archive = useQuery({
    queryKey: ["archive", sortOrder],
    queryFn: () => getResource("archive?sort=" + sortOrder),
  });
  return (
    <Container sx={{ m: 0 }}>
      <SectionHeader title="Archived Leads" />
      <Box sx={{ display: "flex", w: "100vw", flexWrap: "wrap" }}>
        {archive.isLoading ? (
          <h1 className="">Loading...</h1>
        ) : archive.isError ? (
          <h1 className="">Error</h1>
        ) : (
          <>
            {/* <Typography variant="h5" color="primary" sx={{ my: 2 }}>
              Trial Lessons
            </Typography> */}
            <ArchiveTable enquiries={archive.data}>
            </ArchiveTable>
          </>
        )}
      </Box>
    </Container>
  );
};

export default ArchivedLeads;
