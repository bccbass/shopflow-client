const dateStamp = new Date(Date.now())
  .toLocaleDateString("en-AU")
  .split("T")[0];

const addDays = (days, date = Date.now()) => {
  let result = new Date(date);
  result.setDate(result.getDate() + days);
  return result.toISOString().split("T")[0];
};

const calculateNextContact = (lead) => {
  if (lead.bookedTrial) {
    if (lead.trialLesson.followUp.length >= 2) {
      return "";
    } else return addDays(2);
  } else if (lead.followUp.length == 0) {
    return addDays(3);
  } else if (lead.followUp.length == 1) {
    return addDays(4);
  } else if (lead.followUp.length == 2) {
    return addDays(7);
  }
  else return "";
};

const localDate = (date, locale = "en-AU", incYear = true) => {
  const formattedDate = new Date(date).toLocaleString(locale, {
    day: "numeric",
    month: "numeric",
    year: incYear ? "numeric" : null,
  });
  return formattedDate == "Invalid Date" ? "" : formattedDate;
};

const getDay = (date, locale = "en-AU") => {
  const formattedDate = new Date(date).toLocaleString(locale, {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  return formattedDate == "Invalid Date" ? "" : formattedDate;
};

const formatDate = (date, incYear = true) => {
  try {
    const formattedDate = date?.split("T")[0];
    return formattedDate == undefined ? "" : formattedDate;
  } catch (e) {
    console.log("Invalid date:", e.message);
  }
};

const nullDate = (date) => new Date(date) <= new Date("2020-01-01");

export {
  addDays,
  calculateNextContact,
  dateStamp,
  localDate,
  nullDate,
  formatDate,
  getDay,
};
