import React from 'react'
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { getResource } from "../assets/apiHelpers";
import SectionHeader from "../SectionHeader";
import LeadsChart from './LeadsChart';
import { Container } from '@mui/material';



const Analytics = () => {
    const {data, isLoading, isError} = useQuery({
      queryKey: ["analytics"],
      queryFn: () => getResource("analytics"),
    });
    
  return (
    <Container>
      < SectionHeader title="Analytics" />
{  (!isError && !isLoading) && < LeadsChart data={data} />
}
    </Container>
  )
}

export default Analytics