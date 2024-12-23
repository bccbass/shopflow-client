import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { getResource } from "../assets/apiHelpers";
import SectionHeader from "../SectionHeader";
import { Container, Box, Typography, Modal } from "@mui/material";
import EnquiriesTable from "../Tables/EnquiriesTable";
import BookTrialButton from "./BookTrialButton";

const NewStudents = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortOrder = searchParams.get("sort");
  const leadsQuery = useQuery({
    queryKey: ["leads", sortOrder],
    queryFn: () => getResource("leads?sort=" + sortOrder),
  });
  return (
    <Container sx={{ m: 0 }}>
      <SectionHeader title="New Students" />
      <Box sx={{ display: "flex", w: "100vw", flexWrap: "wrap" }}>
        {leadsQuery.isLoading ? (
          <h1 className="">Loading...</h1>
        ) : leadsQuery.isError ? (
          <h1 className="">Error</h1>
        ) : (
          <>
            {/* <Typography variant="h5" color="primary" sx={{ my: 2 }}>
              Enquiries
            </Typography> */}
            <EnquiriesTable enquiries={leadsQuery.data.filter(lead => !lead.bookedTrial)}>
            </EnquiriesTable>
          </>
        )}
      </Box>
    </Container>
  );
};

export default NewStudents;
