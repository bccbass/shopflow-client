import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts/PieChart";

import { Box, Typography } from "@mui/material";

const LeadsChart = ({ data }) => {
  const getFirstDayOfMonth = (offset = 0) => {
    const date = new Date();
    date.setMonth(date.getMonth() - offset, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  };

  const dataByDate = (data, months) =>
    data.filter(
      (lead) => new Date(lead.dateCreated) >= getFirstDayOfMonth(months)
    ).length  / months;


  const parseDataByDate = (data, monthsArray) => {
    return monthsArray.map((interval) => {
      return  {
        interval: `${interval} Month Avg.`,
        noTrial: dataByDate(data.noTrialLeads, interval),
        trial: dataByDate(data.trialLeads, interval),
        enrolled: dataByDate(data.enrolledLeads, interval),
      };
    });
  };
  const valueFormatter = function (value) {
    return Math.floor(value);
  };

  const dataSet = parseDataByDate(data, [1, 3, 6, 12]);
  const currentMonthData = dataSet[0];
  const monthTotal =
    currentMonthData.trial +
    currentMonthData.noTrial +
    currentMonthData.enrolled;

  return (
    <Box
      sx={{
        py: 6,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "flexstart",
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography variant="h4" gutterBottom color="text.secondary">
        Last 30 Days
        </Typography>
        <PieChart
          series={[
            {
              arcLabel: (item) =>
                `${Math.round((item.value / monthTotal) * 100)}%`,
              data: [


                {
                  id: 0,
                  value: currentMonthData.enrolled,
                  label: "Enrolled",
                },
                {
                  id: 1,
                  value: currentMonthData.trial,
                  label: "Trial Only",
                },
                {
                  id: 2,
                  value: currentMonthData.noTrial,
                  label: "No Trial",
                  valueFormatter,
                },
              ],
            },
          ]}
          width={420}
          height={200}
        />
        <Typography variant="h5" gutterBottom color="text.secondary">
          {`30 Day Total: ${monthTotal}`}
        </Typography>
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography variant="h4" gutterBottom color="text.secondary">
          Yearly Average
        </Typography>
        <BarChart
          yAxis={[
            {
              label: "Lead History (Averages)",
            },
          ]}
          xAxis={[{ scaleType: "band", dataKey: "interval" }]}
          dataset={dataSet}
          series={[
            {
              dataKey: "enrolled",
              label: "Enrolled",
              stack: "current",
              valueFormatter,
            },
            {
              dataKey: "trial",
              label: "Trial Only",
              stack: "current",
              valueFormatter,
            },
            {
              dataKey: "noTrial",
              label: "No Trial",
              stack: "current",
              valueFormatter,
            },
          ]}
          width={500}
          height={300}
        />
      </Box>
    </Box>
  );
};

export default LeadsChart;
