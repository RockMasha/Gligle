export function saveData(event) {
    const formValueLS = JSON.parse(localStorage.getItem("formValue")) || {};
    const { name, value } = event.target;
    formValueLS[name] = value;
    localStorage.setItem("formValue", JSON.stringify(formValueLS));
  }