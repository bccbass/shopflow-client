import React from "react";
import { useState } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { Box, Typography, Select, MenuItem } from "@mui/material";
import { processLeadsForChart, getDateRange, filterByDate } from "../assets/dataHelpers.js";

const LeadsLineChart = ({ allLeads }) => {
  const [dateRange, setDateRange] = useState("all-time");


  const userDateRange = getDateRange(dateRange);


  const chartData = processLeadsForChart(filterByDate(allLeads, userDateRange));

  return (
    <Box
      sx={{
        pb: 6,
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
        Activity by Month
      </Typography>
      <LineChart
        xAxis={[{ scaleType: "point", data: chartData.map((d) => d.x) }]}
        series={[
          { 
            data: chartData.map((d) => d.inquiries),
            label: "No Trial",
            // stack: "all",
            // area: true,
          },
          {
            data: chartData.map((d) => d.trials),
            label: "Trials",
            // stack: "all",
            // area: true,
          },
          {
            data: chartData.map((d) => d.enrollments),
            label: "Enrollments",
            stack: "all",
            area: true,
          },
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
      <Box sx={{ display: "flex", alignItems: 'center', width: '100%', justifyContent: 'flex-end', px: 12 }}>
        <Typography px={2}>Date Range: </Typography>
        <Select
          size="small"
          value={dateRange}
          onChange={(e) => setDateRange(e.target.value)}
        >
          {/* <MenuItem value="this-month">This Month</MenuItem> */}
          <MenuItem value="last-3-months">Last 3 Months</MenuItem>
          <MenuItem value="this-year">This Year</MenuItem>
          <MenuItem value="last-year">Last Year</MenuItem>
          <MenuItem value="all-time">All Time</MenuItem>
        </Select>
      </Box>
    </Box>
  );
};

export default LeadsLineChart;
