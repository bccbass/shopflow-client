import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { getResource } from "../assets/apiHelpers";
import SectionHeader from "../SectionHeader";
import { Container, Box } from "@mui/material";
import NewStudentsTable from './NewStudentsTable';

const NewStudents = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortOrder = searchParams.get("sort");
  const leadsQuery = useQuery({
    queryKey: ["leads", sortOrder],
    queryFn: () => getResource("leads?sort=" + sortOrder),
  });
  return (
    <Container>
      <SectionHeader title="New Students" setSearchParams={setSearchParams} />
      <Box sx={{ display: "flex", w: "100vw", flexWrap: "wrap" }}>
        {leadsQuery.isLoading ? (
          <h1 className="">Loading...</h1>
        ) : leadsQuery.isError ? (
          <h1 className="">Error</h1>
        ) : (
          < NewStudentsTable newStudents={leadsQuery.data}/>
        )}
      </Box>
    </Container>
  );
};

export default NewStudents;
