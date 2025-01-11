import React from "react";
import { useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { getResource } from "../assets/apiHelpers";
import SectionHeader from "../SectionHeader";
import { Container, Box, Typography, Button } from "@mui/material";
import EnquiriesTable from "../Tables/EnquiriesTable";
import DownloadCollectionCsvButton from "../Buttons/DownloadCollectionCsvButton";
import Search from '../Search'
import ErrorCard from '../ErrorCard'
import TableSkeleton from "../TableSkeleton";

const NewStudents = () => {
  const [viewTrials, setViewTrials] = useState(false)
  const [ searchTerm, setSearchTerm ] = useState('')
  const [searchParams, setSearchParams] = useSearchParams();
  const sortOrder = searchParams.get("sort");
  const leadsQuery = useQuery({
    queryKey: ["leads", sortOrder],
    queryFn: () => getResource("leads?sort=" + sortOrder),
  });

          
  const filteredArr = (arr, searchTerm) => { 
    return searchTerm.length == 0 ?
      arr 
        :
      arr
      .filter(lead => [lead.student.firstName, lead.student.lastName, lead.student.instrument, lead.trialLesson.instrument, ...Object.values(lead.guardian)]
      .map(name => name.toLowerCase().includes(searchTerm.toLowerCase())).includes(true)
      )
    }

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
          <TableSkeleton/>
        ) : leadsQuery.isError || utilsQuery.isError ? (
          <ErrorCard />
        ) : (
          <>
            < Box sx={{width: '100%', display: 'flex', mt: 0, mb: 4, pr: 2, justifyContent: 'flex-end'}}>
              < Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </Box>
            <Box sx={{width: '100%', border: '1px solid lightgrey', borderTop: 0, borderRadius: '8px', z: 20}}>
              <Box sx={{width: '100%'}}>
                <Button onClick={() => setViewTrials(false)} sx={leftActiveStyles}>{`Enquiries (${newLeadsData.length})`}</Button>
                <Button onClick={() => setViewTrials(true)}  sx={rightActiveStyles } >{`Trial Lessons (${trialBookedData.length})`}</Button>
              </Box>
            { viewTrials ?<EnquiriesTable enquiries={filteredArr(trialBookedData, searchTerm)} info={utilsQuery.data}/>
              :
            <EnquiriesTable enquiries={filteredArr(newLeadsData, searchTerm)} info={utilsQuery.data}/> }
            </Box>
            < Box sx={{width: '100%', display: 'flex', justifyContent: 'flex-end', mr: 4, mt: 4}}>
              < DownloadCollectionCsvButton collection="Leads" data={leadsQuery.data}/>
            </Box>
          </>
        )}

      </Box>
    </Container>
  );
};

export default NewStudents;
