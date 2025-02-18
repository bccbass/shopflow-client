import React from "react";
import { useState } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { Box, Typography, Select, MenuItem } from "@mui/material";
import { processEnquiryTotalsForChart, getThirtyRange, filterByDate } from "../assets/dataHelpers.js";

const ThirtyDayInquiriesChart = ({ enquiryData }) => {

const thirtyDayRange = getThirtyRange()


  const chartData = processEnquiryTotalsForChart(filterByDate(enquiryData, thirtyDayRange));

  return (
    <Box
      sx={{
        py: 6,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        sx={{ alignSelf: "flex-start" }}
        px={12}
        py={2}
        variant="h4"
        gutterBottom
        color="text.secondary"
      >
        Total Enquiries (30 Days)
      </Typography>
      <LineChart
        xAxis={[{ scaleType: "point", data: chartData.map((d) => d.x) }]}
        series={[

          { 
            data: chartData.map((d) => d.total),
            label: "Total Enquiries", 
            // stack: "all",
            area: false,
            color: "teal",
          },
        ]}
        width={1000}
        height={300}
      />

    </Box>
  );
};

export default ThirtyDayInquiriesChart;
