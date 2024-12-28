import { addDays } from "../assets/dateHelpers";

const blankStudent = {
  notes: "",
  nextContactDate: addDays(3),
  leadSource: "",
  student: {
    firstName: "",
    lastName: "",
    instrument: "",
    groupClass: "",
    age: "",
  },
  guardian: {
    firstName: "",
    lastName: "",
  },
  contact: { phone: "", email: "" },
  bookedTrial: false,
  trialLesson: {
    date: "",
    time: { hour: "", min: "", twelveHr: "" },
    location: "",
    instrument: "",
    groupClass: "",
    teacher: "",
    followUp: [],
  },
};

export { blankStudent }