import { format } from 'date-fns'


// Function to process leads into chart data
const processLeadsForChart = (leads) => {
    const groupedData = {};
  
    leads.forEach((lead) => {
      const month = format(new Date(lead.dateCreated), "yyyy-MM"); // Extract YYYY-MM
  
      // Initialize if month not present
      if (!groupedData[month]) {
        groupedData[month] = { x: month, inquiries: 0, trials: 0, enrollments: 0, total: 0 };
      }
  
      // Categorize leads
      if (lead.status === "noTrial") groupedData[month].inquiries += 1;
      if (lead.status === "trial") groupedData[month].trials += 1;
      if (lead.status === "enrolled") groupedData[month].enrollments += 1;
      groupedData[month].total += 1
    });
  
    return Object.values(groupedData); // Convert to array for the chart
  };

  export {processLeadsForChart}