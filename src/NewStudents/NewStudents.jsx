import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { getResource } from "../assets/apiHelpers";
import SectionHeader from "../SectionHeader";
import { Container, Box, Typography } from "@mui/material";
import NewEnquiriesTable from "./NewEnquiriesTable";
import NewTrialsTable from "./NewTrialsTable";
import NewStudentForm from "../AddStudent/AddStudentForm";

const NewStudents = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortOrder = searchParams.get("sort");
  const leadsQuery = useQuery({
    queryKey: ["leads", sortOrder],
    queryFn: () => getResource("leads?sort=" + sortOrder),
  });
  return (
    <Container sx={{m: 0}}>
      <SectionHeader title="New Students" />
      <Box sx={{ display: "flex", w: "100vw", flexWrap: "wrap" }}>
        {leadsQuery.isLoading ? (
          <h1 className="">Loading...</h1>
        ) : leadsQuery.isError ? (
          <h1 className="">Error</h1>
        ) : (
          <>
            <Typography variant="h5" color="primary" sx={{ my: 2 }}>
              Enquiries
            </Typography>
            <NewEnquiriesTable newStudents={leadsQuery.data} />
            <Typography variant="h5" color="primary" sx={{ mt: 6, mb: 2 }}>
              Trial Lessons
            </Typography>
            <NewTrialsTable newStudents={leadsQuery.data} />
          </>
        )}
      </Box>
    </Container>
  );
};

export default NewStudents;
