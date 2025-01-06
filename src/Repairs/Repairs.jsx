import React from "react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { getResource } from "../assets/apiHelpers";
import SectionHeader from "../SectionHeader";
import { Container, Box, Typography, Button } from "@mui/material";
import AddRepairButton from "./AddRepairButton";
import RepairFormWrapper from "./RepairFormWrapper";
import RepairsTable from "./RepairsTable";
import DownloadCollectionCsvButton from "../Buttons/DownloadCollectionCsvButton";

const Repairs = () => {
  const [viewActive, setViewActive] = useState(true)
  const [searchParams, setSearchParams] = useSearchParams();
  const sortOrder = searchParams.get("sort");
  const repairsQuery = useQuery({
    queryKey: ["repairs", sortOrder],
    queryFn: () => getResource("repairs?sort=" + sortOrder),
  });

  const selectedButtonStyles = {width: '50%', backgroundColor: 'teal', fontWeight: 'bold', borderRadius: 0, color: 'white', border: '1px solid teal'}
  const inactiveButtonStyles = {width: '50%', backgroundColor: 'white', borderRadius: 0, color: 'grey', border: '1px solid lightgrey'}

  const completedRepairs =
    !repairsQuery.isLoading && !repairsQuery.error
      ? repairsQuery.data.filter((repair) => repair.completed)
      : [];

  const activeRepairs =
    !repairsQuery.isLoading && !repairsQuery.error
      ? repairsQuery.data.filter((repair) => !repair.completed)
      : [];

  return (
    <Container sx={{ m: 0, pb: 12}}>
      <SectionHeader title="Repairs" />
      <Box sx={{ display: "flex", w: "100vw", flexWrap: "wrap" }}>
        {repairsQuery.isLoading ? (
          <h1 className="">Loading...</h1>
        ) : repairsQuery.isError ? (
          <h1 className="">Error</h1>
        ) : (
          <>
             <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                mb: 6,
                // px: 2
              }}
            >
              <AddRepairButton>
                <RepairFormWrapper />
              </AddRepairButton>
              <DownloadCollectionCsvButton
              collection="Repairs"
              data={repairsQuery.data}
              format="repairs"
            />
            </Box>
            <Box sx={{width: '100%'}}>
              <Box sx={{width: '100%'}}>
                <Button onClick={() => setViewActive(true)} sx={viewActive ? selectedButtonStyles : inactiveButtonStyles }>In Progress</Button>
                <Button onClick={() => setViewActive(false)} sx={!viewActive ? selectedButtonStyles : inactiveButtonStyles } >Completed</Button>
              </Box>

            { viewActive ? <RepairsTable repairs={activeRepairs} />
              :
            <RepairsTable repairs={completedRepairs} />}
            </Box>
          </>
        )}
      </Box>
    </Container>
  );
};

export default Repairs;
