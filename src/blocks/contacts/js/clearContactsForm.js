import { formElements } from "./formElements";

export function clearContactsForm(event) {
  event.preventDefault();
  formElements.form.reset();
  localStorage.removeItem("formValue");
}
