import {
  format,
  startOfMonth,
  subMonths,
  startOfYear,
  endOfMonth,
  subYears,
  subDays,
  endOfYear,
} from "date-fns";

// Function to process leads into chart data
const processLeadsForChart = (leads) => {
  const groupedData = {};

  leads.forEach((lead) => {
    const month = format(new Date(lead.dateCreated), "MMM yyyy"); // Extract YYYY-MM

    // Initialize if month not present
    if (!groupedData[month]) {
      groupedData[month] = {
        x: month,
        inquiries: 0,
        trials: 0,
        enrollments: 0,
        total: 0,
      };
    }

    // Categorize leads
    if (lead.status === "noTrial") groupedData[month].inquiries += 1;
    if (lead.status === "trial") groupedData[month].trials += 1;
    if (lead.status === "enrolled")
      (groupedData[month].enrollments += 1), (groupedData[month].trials += 1);
    groupedData[month].total += 1;
  });

  return Object.values(groupedData); // Convert to array for the chart
};


const processEnquiryTotalsForChart = (leads) => {
  const groupedData = {};

  leads.forEach((lead) => {
    const day = format(new Date(lead.dateCreated), "MMM dd"); 

    // Initialize if day not present
    if (!groupedData[day]) {
      groupedData[day] = {
        x: day,
        total: 0,
      };
    }

    // Categorize leads
    groupedData[day].total += 1;
  });

  return Object.values(groupedData); // Convert to array for the chart
};
 
const getThirtyRange = () => {
  const today = new Date();

  return {start: subDays(today, 30), end: today}
}
const getDateRange = (option) => {
  const today = new Date();

  switch (option) {
    case "all-time":
      return { start: null, end: null }; // No filtering

    case "this-month":
      return { start: startOfMonth(today), end: endOfMonth(today) };

    case "last-3-months":
      return {
        start: subMonths(startOfMonth(today), 2),
        end: endOfMonth(today),
      };

    case "this-year":
      return { start: startOfYear(today), end: endOfMonth(today) };

    case "last-year":
      return {
        start: subYears(startOfYear(today), 1),
        end: subYears(endOfYear(today), 1),
      };

    default:
      return { start: null, end: null }; // Fallback (all-time)
  }
};

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

  const filterByDate = (data, dateRange) => {
    if (!dateRange.start || !dateRange.end) return data; // No filter (all time)
  
    return data.filter((item) => {
      const itemDate = new Date(item.dateCreated);
      return itemDate >= dateRange.start && itemDate <= dateRange.end;
    });
  };

    export { processLeadsForChart, getThirtyRange, getDateRange, dataByDate, getFirstDayOfMonth, parseDataByDate, processEnquiryTotalsForChart, filterByDate  };
