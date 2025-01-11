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
import Search from '../Search'
import ErrorCard from '../ErrorCard'
import TableSkeleton from "../TableSkeleton";



const Repairs = () => {
  const [ searchTerm, setSearchTerm ] = useState('')
  const [viewLeft, setViewLeft] = useState(true)
  const [searchParams, setSearchParams] = useSearchParams();
  const sortOrder = searchParams.get("sort");
  const repairsQuery = useQuery({
    queryKey: ["repairs", sortOrder],
    queryFn: () => getResource("repairs?sort=" + sortOrder),
  });

  
  const leftStyles ={fontSize: '1rem', width: '50%', border:'1px solid lightgrey', borderLeft: 0, borderRadius: '8px 8px 0 0', fontWeight: viewLeft ? 'bold' : '', borderBottom: !viewLeft ? '1px solid lightgrey' : 0, color: !viewLeft ? 'lightgrey' : '', backgroundColor: !viewLeft ? "#FAFAFA" : ''}
  const rightStyles = {fontSize: '1rem', width: '50%', border:'1px solid lightgrey', borderRight: 0, borderRadius: '8px 8px 0 0', fontWeight: !viewLeft ? 'bold' : '', borderBottom: viewLeft ? '1px solid lightgrey' : 0, color: viewLeft ? 'lightgrey' : '', backgroundColor: viewLeft ? "#FAFAFA" : ''}

  const filterArray = (arr, searchTerm) => {
    return searchTerm.length == 0 ?
      arr :
      arr.filter(repair => [repair.firstName, repair.lastName, repair.instrument, repair.jobDescription]
      .map(val => val.toLowerCase().includes(searchTerm.toLowerCase()))
        .includes(true)
    )
  }

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
          < TableSkeleton />
        ) : repairsQuery.isError ? (
          <ErrorCard />
        ) : (
          <>

             <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                mb: 4,
                pr: 2
              }}
            >
              <AddRepairButton>
                <RepairFormWrapper />
              </AddRepairButton>
              < Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </Box>
            <Box sx={{width: '100%', border: '1px solid lightgrey', borderTop: 0, borderRadius: '6px', z: 20}}>
              <Box sx={{width: '100%'}}>
                <Button onClick={() => setViewLeft(true)} sx={leftStyles}>In Progress</Button>
                <Button onClick={() => setViewLeft(false)} sx={rightStyles } >Completed</Button>
              </Box>

            { viewLeft ? <RepairsTable repairs={filterArray(activeRepairs, searchTerm)} />
              :
            <RepairsTable repairs={filterArray(completedRepairs, searchTerm)} />}
            </Box>
            < Box sx={{width: '100%', display: 'flex', mt: 4, mb: 5, mr: 4, justifyContent: 'flex-end'}}>
              <DownloadCollectionCsvButton
              collection="Repairs"
              data={repairsQuery.data}
              format="repairs"
            />
            </Box>
          </>
        )}
      </Box>
    </Container>
  );
};

export default Repairs;
