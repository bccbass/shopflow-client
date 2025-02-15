import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';

import { Box } from "@mui/material"

const LeadsChart = ({data}) => {
    console.log(data[0])
    // const totalStatus = data.reduce( (acc, cur) => 
    //     cur.status === 'enrolled' ? acc.enrolled = acc.enrolled +=1 : acc.trial = acc.trial +=1
    // , {enrolled: 0, trial: 0, noTrial: 0});
    const noTrial = data.filter(lead => lead.status === 'noTrial').length
    const trial = data.filter(lead => lead.status === 'trial').length
    const enrolled = data.filter(lead => lead.status === 'enrolled').length
  return (
    <Box sx={{display: 'flex'}}>
    <BarChart
      xAxis={[{ scaleType: 'band', data: ['Last Year'] }]}
      series={[{ data: [noTrial] }, { data: [trial] },{ data: [enrolled] }]}
      width={500}
      height={300}
    />  
    <PieChart
  series={[
    {
      data: [
        { id: 0, value: noTrial, label: 'No Trial' },
        { id: 1, value: trial, label: 'Trial Booked' },
        { id: 2, value: enrolled, label: 'Enrolled' },
      ],
    },
  ]}
  width={420}
  height={200}
/>
</Box>
)
}

export default LeadsChart