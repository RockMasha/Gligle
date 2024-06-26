import { addDateInFormFromLS } from "./js/addDateInFormFromLS";
import { clearContactsForm } from "./js/clearContactsForm";
import { formElements } from "./js/formElements";
import { saveData } from "./js/saveData";

if (localStorage.getItem("formValue")) {
  addDateInFormFromLS();
}

formElements.form.addEventListener("input", saveData);
formElements.submitBth.addEventListener("click", clearContactsForm);
