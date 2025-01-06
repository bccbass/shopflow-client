import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { getResource } from "../assets/apiHelpers";
import SectionHeader from "../SectionHeader";
import { Container, Box, Typography } from "@mui/material";
import EnquiriesTable from "../Tables/EnquiriesTable";
import DownloadCollectionCsvButton from '../Buttons/DownloadCollectionCsvButton'

const TrialLessons = () => {
  // const [searchParams, setSearchParams] = useSearchParams();
  // const sortOrder = searchParams.get("sort");
  const leadsQuery = useQuery({
    queryKey: ["leads"],
    queryFn: () => getResource("leads"),
  });

  const filteredData = !leadsQuery.isLoading && !leadsQuery.error ? leadsQuery.data.filter(lead => lead.bookedTrial) : []

  return (
    <Container sx={{ m: 0 }}>
      <SectionHeader title="Trial Lessons" />
      <Box sx={{ display: "flex", w: "100vw", flexWrap: "wrap" }}>
        {leadsQuery.isLoading ? (
          <h1 className="">Loading...</h1>
        ) : leadsQuery.isError ? (
          <h1 className="">Error</h1>
        ) : (
          <>
            < Box sx={{width: '100%', display: 'flex', justifyContent: 'flex-end', mb: 2}}>
              < DownloadCollectionCsvButton collection="Trial Lessons" data={filteredData} />
            </Box>
           
            < EnquiriesTable enquiries={filteredData}/>
          </>
        )}
      </Box>
    </Container>
  );
};

export default TrialLessons;
