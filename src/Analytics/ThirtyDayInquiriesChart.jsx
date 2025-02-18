import React from "react";
import { useState } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { Box, Typography, Select, MenuItem } from "@mui/material";
import {
  processEnquiryTotalsForChart,
  filterByDate,
  getDateRange
} from "../assets/dataHelpers.js";

const ThirtyDayInquiriesChart = ({ enquiryData }) => {

  const [dateRange, setDateRange] = useState("30-days");


  const userDateRange = getDateRange(dateRange);

  const chartData = processEnquiryTotalsForChart(
    filterByDate(enquiryData, userDateRange)
  );

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
        Total Enquiry History
      </Typography>
      <LineChart
        xAxis={[{ scaleType: "point", data: chartData.map((d) => d.x) }]}
        series={[
          {
            data: chartData.map((d) => d.total),
            label: "Total Enquiries",
            // stack: "all",
            area: true,
            color: "blueviolet",
          },
        ]}
        width={1000}
        height={300}
      />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "flex-end",
          px: 12,
        }}
      >
        <Typography px={2}>Date Range: </Typography>
        <Select
          size="small"
          value={dateRange}
          onChange={(e) => setDateRange(e.target.value)}
        >
          {/* <MenuItem value="this-month">This Month</MenuItem> */}
          <MenuItem value="30-days">Last 30 Days</MenuItem>
          <MenuItem value="this-month">This Month</MenuItem>
          <MenuItem value="last-3-months">Last 3 Months</MenuItem>
          <MenuItem value="this-year">This Year</MenuItem>
          <MenuItem value="last-year">Last Year</MenuItem>
          {/* <MenuItem value="all-time">All Time</MenuItem> */}
        </Select>
      </Box>
    </Box>
  );
};

export default ThirtyDayInquiriesChart;
