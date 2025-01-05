import { addDays } from "./dateHelpers";

const defaultRepairForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  instrument: "",
  status: "In Progress",
  jobDescription: "",
  notes: "",
  completed: false,
  createdBy: "",
  due: addDays(4)
};

export { defaultRepairForm };
