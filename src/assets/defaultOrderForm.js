import { addDays} from "./dateHelpers";

 let dueDate = addDays(5)

const defaultOrderForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  item: "",
  status: "In Progress",
  orderDescription: "",
  paid: false,
  depositAmount: '',
  totalAmount: '',
  notes: "",
  completed: false,
  createdBy: '',
  due:  dueDate
};

export { defaultOrderForm };
