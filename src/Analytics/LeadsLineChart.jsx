import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { Box, Typography } from "@mui/material";
import { processLeadsForChart } from "../assets/dataHelpers.js";

const LeadsLineChart = ({ data }) => {
  const chartData = processLeadsForChart([
    ...data.enrolledLeads,
    ...data.trialLeads,
    ...data.noTrialLeads,
  ]);

  return (
    <Box
      sx={{py: 6, width: '100%', display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}
    >
                <Typography variant="h4" gutterBottom color="text.secondary">
                  Activity by Month
                </Typography>
      <LineChart
        xAxis={[{ scaleType: "point", data: chartData.map((d) => d.x) }]}
        series={[
          {
            data: chartData.map((d) => d.inquiries),
            label: "Inquiries",
            stack: "all",
            area: true,
          },
          {
            data: chartData.map((d) => d.trials),
            label: "Trials",
            stack: "all",
            area: true,
          },
          {
            data: chartData.map((d) => d.enrollments),
            label: "Enrollments",
            stack: "all",
            area: true,
          },
        ]}
        width={1000}
        height={300}
      />
    </Box>
  );
};

export default LeadsLineChart;
