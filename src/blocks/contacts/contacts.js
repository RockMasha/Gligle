const form = document.querySelector(".contacts-form");

const formElements = {
  appealEl: document.querySelector(".contacts-form__input[name='appeal']"),
  communicationEl: document.querySelector(
    ".contacts-form__input[name='communication']"
  ),
  messagesEl: document.querySelector(".contacts-form__input[name='messages']"),
};

const formValue = localStorage.getItem("formValue");
if (formValue) {
  const saveFormValue = JSON.parse(formValue);
  formElements.appealEl.value = saveFormValue.appeal || "";
  formElements.communicationEl.value = saveFormValue.communication || "";
  formElements.messagesEl.value = saveFormValue.messages || "";
}

form.addEventListener("input", saveData);

function saveData(event) {
  let formValueLs = JSON.parse(localStorage.getItem("formValue")) || {};
  const { name, value } = event.target;
  formValueLs[name] = value;
  localStorage.setItem("formValue", JSON.stringify(formValueLs));
}
