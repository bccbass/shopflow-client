import React from "react";
import { useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { getResource } from "../assets/apiHelpers";
import SectionHeader from "../SectionHeader";
import { Container, Box, Typography, Button } from "@mui/material";
import EnquiriesTable from "../Tables/EnquiriesTable";
import DownloadCollectionCsvButton from "../Buttons/DownloadCollectionCsvButton";

const NewStudents = () => {
  const [viewTrials, setViewTrials] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams();
  const sortOrder = searchParams.get("sort");
  const leadsQuery = useQuery({
    queryKey: ["leads", sortOrder],
    queryFn: () => getResource("leads?sort=" + sortOrder),
  });

  const utilsQuery = useQuery({
		queryKey: ["utils"],
		queryFn: () => getResource("utils?resource=info"),
	});

  const leftActiveStyles ={fontSize: '1rem', width: '50%', border:'1px solid lightgrey', borderLeft: 0, borderRadius: '8px 8px 0 0', fontWeight: !viewTrials ? 'bold' : '', borderBottom: viewTrials ? '1px solid lightgrey' : 0, color: viewTrials ? 'lightgrey' : '', backgroundColor: viewTrials ? "#FAFAFA" : ''}

  const rightActiveStyles = {fontSize: '1rem', width: '50%', border:'1px solid lightgrey', borderRight: 0, borderRadius: '8px 8px 0 0', fontWeight: viewTrials ? 'bold' : '', borderBottom: !viewTrials ? '1px solid lightgrey' : 0, color: !viewTrials ? 'lightgrey' : '', backgroundColor: !viewTrials ? "#FAFAFA" : ''}


  const newLeadsData = !leadsQuery.isLoading && !leadsQuery.error ? leadsQuery.data.filter(lead => !lead.bookedTrial) : []
  const trialBookedData = !leadsQuery.isLoading && !leadsQuery.error ? leadsQuery.data.filter(lead => lead.bookedTrial) : []


  return (
    <Container sx={{ m: 0, pb: 16 }}>
      <SectionHeader title="New Students" />
      <Box sx={{ display: "flex", w: "100vw", flexWrap: "wrap" }}>
        {leadsQuery.isLoading || utilsQuery.isLoading? (
          <h1 className="">Loading...</h1>
        ) : leadsQuery.isError || utilsQuery.isError ? (
          <h1 className="">Error</h1>
        ) : (
          <>
            < Box sx={{width: '100%', display: 'flex', justifyContent: 'flex-end', mb: 2}}>
              < DownloadCollectionCsvButton collection="Leads" data={leadsQuery.data}/>
            </Box>

            <Box sx={{width: '100%', border: '1px solid lightgrey', borderTop: 0, borderRadius: '8px', z: 20, mt: 3}}>
              <Box sx={{width: '100%'}}>
                <Button onClick={() => setViewTrials(false)} sx={leftActiveStyles}>{`Enquiries (${newLeadsData.length})`}</Button>
                <Button onClick={() => setViewTrials(true)}  sx={rightActiveStyles } >{`Trial Lessons (${trialBookedData.length})`}</Button>
              </Box>
            { viewTrials ?<EnquiriesTable enquiries={trialBookedData} info={utilsQuery.data}/>
              :
            <EnquiriesTable enquiries={newLeadsData} info={utilsQuery.data}/> }
            </Box>
          </>
        )}
      </Box>
    </Container>
  );
};

export default NewStudents;
