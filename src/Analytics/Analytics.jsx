import React from "react";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { getResource } from "../assets/apiHelpers";
import SectionHeader from "../SectionHeader";
import LeadsChart from "./LeadsChart";
import LeadsLineChart from "./LeadsLineChart";
import ThirtyDayInquiriesChart from './ThirtyDayInquiriesChart'
import { Container } from "@mui/material";

const Analytics = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["analytics"],
    queryFn: () => getResource("analytics"),
  });

  const allLeads = !isLoading && !isError && [
    ...data?.enrolledLeads,
    ...data?.trialLeads,
    ...data?.noTrialLeads,
  ].sort((a, b) => new Date(a.dateCreated) - new Date(b.dateCreated));

  return (
    <Container sx={{ width: "100vw", m: 0, pb: 16 }}>
      <SectionHeader title="Analytics Dashboard" />
      {!isError && !isLoading && 
      <>
      <LeadsLineChart allLeads={allLeads} />
      <LeadsChart data={data} />
      < ThirtyDayInquiriesChart enquiryData={allLeads}/>
      </>}
    </Container>
  );
};

export default Analytics;
