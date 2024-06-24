export function createDataOfCurrentQuestions(event) {
  const question = event.target.closest(".familiarization-questions__item");
  const answer = question.querySelector(".familiarization-questions__answer");
  const arrow = question.querySelector(".familiarization-questions__arrow");

  return {question, answer, arrow};
}
