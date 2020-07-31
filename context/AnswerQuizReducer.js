export const ANSWER_TYPES = {
  SET_DATA: "SET_DATA",
  CHANGE_USERNAME: "CHANGE_USERNAME",
  START_QUIZ: "START_QUIZ",
  SELECT_ANSWER: "SELECT_ANSWER",
};

export const answersInitialState = {
  creatorName: "",
  quizId: null,
  lang: "en",
  quiz: null,
  username: "",
  quizStarted: false,
  currentQuestion: null,
};

export function AnswerQuizReducer(
  state = answersInitialState,
  { type, payload = null }
) {
  switch (type) {
    case ANSWER_TYPES.SET_DATA: {
      const { creator, id, lang, quiz } = payload;
      return {
        ...state,
        creatorName: creator,
        quizId: id,
        lang: lang,
        quiz: quiz,
      };
    }
    case ANSWER_TYPES.CHANGE_USERNAME: {
      return {
        ...state,
        username: payload,
      };
    }
    case ANSWER_TYPES.START_QUIZ: {
      return {
        ...state,
        currentQuestion: state.quiz[0],
        quizStarted: true,
      };
    }
    case ANSWER_TYPES.SELECT_ANSWER: {
      const { answerId } = payload;
      const { currentQuestion } = state;
      const updatedAnswers = currentQuestion.QuizAnswer.map((answer) => {
        if (answer.id === answerId) {
          if (answer.isSelected) {
            return { ...answer, isCorrect: true, isClicked: true };
          }
          return { ...answer, isClicked: true, isCorrect: false };
        }
        if (answer.isSelected) {
          return { ...answer, isClicked: true, isCorrect: true };
        }
        return { ...answer, isClicked: false, isCorrect: false };
      });
      state.currentQuestion = {
        ...currentQuestion,
        QuizAnswer: updatedAnswers,
        isAnswered: true,
      };
      return { ...state };
    }
    default:
      return state;
  }
}
