import stateOfLastQuestion from "./stateOfQuestion";

export function isEqualQuestion(currentQuestion) {
  const LastQuestion = stateOfLastQuestion.getDataStateOfQuestion();
  return (
    stateOfLastQuestion.IsActiveStateOfQuestion() &&
    currentQuestion.question?.dataset?.id === LastQuestion.question?.dataset?.id
  );
}
