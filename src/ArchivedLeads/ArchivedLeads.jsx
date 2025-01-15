import React from "react";
import { useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { getResource } from "../assets/apiHelpers";
import SectionHeader from "../SectionHeader";
import { Container, Box, Typography } from "@mui/material";
import ArchiveTable from "./ArchiveTable";
import DownloadCollectionCsvButton from "../Buttons/DownloadCollectionCsvButton";
import Search from '../Search'
import ErrorCard from '../ErrorCard'
import TableSkeleton from "../TableSkeleton";




const ArchivedLeads = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [ searchTerm, setSearchTerm ] = useState('')
  const sortOrder = searchParams.get("sort");
  const archive = useQuery({
    queryKey: ["archive", sortOrder],
    queryFn: () => getResource("archive?sort=" + sortOrder),
  });

  const filteredArr = (arr, searchTerm) => { 
    return searchTerm.length == 0 ?
      arr 
        :
      arr
      .filter(lead => [lead.studentFullName, lead.guardianFullName, lead.trialLesson.instrument, lead.student.instrument]
      .map(name => name.toLowerCase().includes(searchTerm.toLowerCase())).includes(true)
      )
    }

  return (
    <Container sx={{ m: 0, mb: 10}}>
      <SectionHeader title="Archived Leads" />
      <Box sx={{ display: "flex", mx: 'auto', width: '90vw', flexWrap: "wrap" }}>
        {archive.isLoading ? (
          < TableSkeleton tabs={false}/>
        ) : archive.isError ? (
          < ErrorCard />
        ) : (
          <>
            < Box sx={{width: '100%', display: 'flex', mt: 0, mb: 1, px: 2, justifyContent: 'space-between'}}>
              < DownloadCollectionCsvButton data={archive.data} collection="Archived Leads" />
              < Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </Box>
            < Box sx={{width: '100%', display: 'flex', justifyContent: 'flex-end', mb: 2}}>
            </Box>
            <ArchiveTable enquiries={filteredArr(archive.data, searchTerm)} >
            </ArchiveTable>
          </>
        )}
      </Box>
    </Container>
  );
};

export default ArchivedLeads;
