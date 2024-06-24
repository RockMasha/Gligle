export function setHeightOfQuestion(dateOfCurrentQuestions) {
  const height = window.getComputedStyle(dateOfCurrentQuestions.answer).height;
  let padding = "";
  for (let i = 0; i <= height.length - 3; i++) {
    padding += height[i];
  }

  dateOfCurrentQuestions.question.style.setProperty(
    "padding-bottom",
    Number(padding) + 20 + "px"
  );
}

export function deleteHeightOfQuestion(dateOfCurrentQuestions) {
  dateOfCurrentQuestions.question.style.setProperty(
    "padding-bottom",
    15 + "px"
  );
}
