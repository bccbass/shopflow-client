import { format, startOfMonth, subMonths, startOfYear, endOfMonth, subYears, endOfYear } from 'date-fns'


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
      if (lead.status === "enrolled") groupedData[month].enrollments += 1, groupedData[month].trials += 1;
      lead.status ==='enrolled' ? groupedData[month].total += 2 : groupedData[month].total += 1
    });
  
    return Object.values(groupedData); // Convert to array for the chart
  };

   const getDateRange = (option) => {
    const today = new Date();
    
    switch (option) {
      case "all-time":
        return { start: null, end: null }; // No filtering
  
      case "this-month":
        return { start: startOfMonth(today), end: endOfMonth(today) };
  
      case "last-3-months":
        return { start: subMonths(startOfMonth(today), 2), end: endOfMonth(today) };
  
      case "this-year":
        return { start: startOfYear(today), end: endOfMonth(today) };
  
      case "last-year":
        return { start: subYears(startOfYear(today), 1), end: subYears(endOfYear(today), 1) };
  
      default:
        return { start: null, end: null }; // Fallback (all-time)
    }
  };

  export {processLeadsForChart, getDateRange}