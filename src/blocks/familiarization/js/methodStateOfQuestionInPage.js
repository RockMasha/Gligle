import {
  deleteHeightOfQuestion,
  setHeightOfQuestion,
} from "./HeigthOfQuestion";
import stateOfQuestion from "./stateOfQuestion";

function removeActiveStateOfQuestion() {
  if (!stateOfQuestion.IsActiveStateOfQuestion()) {
    return;
  }
  const activeElements = stateOfQuestion.getDataStateOfQuestion();
  const answerForTimeout = activeElements.answer;
  setTimeout(() => answerForTimeout.removeAttribute("block"), 200);
  activeElements.answer.classList.remove(
    "familiarization-questions__answer_active"
  );
  activeElements.arrow.classList.remove(
    "familiarization-questions__arrow_active"
  );
  deleteHeightOfQuestion(activeElements);
}

function addActiveStateOfQuestion({ question, answer, arrow }) {
  answer.setAttribute("block", "");
  setTimeout(() => {
    answer.classList.add("familiarization-questions__answer_active");
    arrow.classList.add("familiarization-questions__arrow_active");
    setHeightOfQuestion({ question, answer });
  });
}

function updateActiveStateOfQuestion(date) {
  removeActiveStateOfQuestion();
  addActiveStateOfQuestion(date);
}

export default {
  removeActiveStateOfQuestion,
  addActiveStateOfQuestion,
  updateActiveStateOfQuestion,
};
