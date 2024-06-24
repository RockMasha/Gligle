const stateOfQuestion = {
  question: null,
  answer: null,
  arrow: null,
};

function resetAllStateOfQuestion() {
  stateOfQuestion.question = null;
  stateOfQuestion.answer = null;
  stateOfQuestion.arrow = null;
}

function updateAllStateOfQuestion({ question, answer, arrow }) {
  stateOfQuestion.question = question;
  stateOfQuestion.answer = answer;
  stateOfQuestion.arrow = arrow;
}

function getDataStateOfQuestion() {
  return stateOfQuestion;
}

function IsActiveStateOfQuestion() {
  if (stateOfQuestion.question) {
    return true;
  }
  return false;
}

export default {
  resetAllStateOfQuestion,
  updateAllStateOfQuestion,
  getDataStateOfQuestion,
  IsActiveStateOfQuestion,
};
