export const getLastId = (questions) => {
  let lastId = 1;
  questions.map((question) => {
    question.QuizAnswer.map((answer) => {
      if (answer.id > lastId) lastId = answer.id;
    });
  });
  return lastId;
};

export const validateQuestionsHasSelectedAnswers = (questions) => {
  let questionWithSelectedAnswer = true;
  questions.map((question) => {
    let foundCorrectAnswer = false;
    question.QuizAnswer.map((answer) => {
      if (answer.isSelected) foundCorrectAnswer = true;
    });
    if (foundCorrectAnswer === false) questionWithSelectedAnswer = false;
  });
  return questionWithSelectedAnswer;
};

export const generateRandomSlug = () => {
  return Math.random().toString(36).slice(2);
}
