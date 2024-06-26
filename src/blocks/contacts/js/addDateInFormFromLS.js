import { formElements } from "./formElements";

export function addDateInFormFromLS() {
  const formValue = localStorage.getItem("formValue");
  const saveFormValue = JSON.parse(formValue);
  formElements.appealEl.value = saveFormValue.appeal || "";
  formElements.communicationEl.value = saveFormValue.communication || "";
  formElements.messagesEl.value = saveFormValue.messages || "";
}
