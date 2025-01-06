import { addDays} from "./dateHelpers";

 let dueDate = addDays(5)

const defaultRepairForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  instrument: "",
  status: "In Progress",
  jobDescription: "",
  paid: false,
  amount: '',
  notes: "",
  completed: false,
  createdBy: '',
  due:  dueDate
};

export { defaultRepairForm };
