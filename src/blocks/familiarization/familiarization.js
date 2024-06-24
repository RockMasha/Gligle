import stateOfQuestion from "./js/stateOfQuestion";
import activeQuestionInPage from "./js/methodStateOfQuestionInPage";
import { isEqualQuestion } from "./js/isEqualQuestion";
import { createDataOfCurrentQuestions } from "./js/createDataOfCurrentQuestions";

const listOfQuestions = document.querySelector(".familiarization-questions");

listOfQuestions.addEventListener("click", takeAnswer);

export function takeAnswer(event) {
  if (!event.target.closest(".familiarization-questions__item")) {
    return;
  }
  const dateOfCurrentQuestions = createDataOfCurrentQuestions(event);

  if (isEqualQuestion(dateOfCurrentQuestions)) {
    activeQuestionInPage.removeActiveStateOfQuestion();
    stateOfQuestion.resetAllStateOfQuestion();
    return;
  }

  activeQuestionInPage.updateActiveStateOfQuestion(dateOfCurrentQuestions);
  stateOfQuestion.updateAllStateOfQuestion(dateOfCurrentQuestions);
  return;
}
