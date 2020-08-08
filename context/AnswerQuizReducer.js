export const ANSWER_TYPES = {
  SET_DATA: "SET_DATA",
  CHANGE_USERNAME: "CHANGE_USERNAME",
  START_QUIZ: "START_QUIZ",
  SELECT_ANSWER: "SELECT_ANSWER",
  NEXT_QUESTION: "NEXT_QUESTION",
};

export const answersInitialState = {
  creatorName: "",
  quizId: null,
  lang: "en",
  quiz: null,
  username: "",
  quizStarted: false,
  currentQuestion: null,
  currentIndex: 0,
  score: 0,
  isEnd: false,
  showResults: false,
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
      let isCorrect = false;
      const updatedAnswers = currentQuestion.QuizAnswer.map((answer) => {
        if (answer.id === answerId) {
          if (answer.isSelected) {
            isCorrect = true;
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
        isCorrect: isCorrect,
      };
      if (isCorrect) state.score += 1;
      return {
        ...state,
        isEnd: state.quiz.length <= state.currentIndex + 1 ? true : false,
      };
    }
    case ANSWER_TYPES.NEXT_QUESTION: {
      state.quiz[state.currentIndex] = state.currentQuestion;
      if (state.isEnd) {
        return {
          ...state,
          showResults: true,
        };
      } else {
        console.log(state.isEnd);
        return {
          ...state,
          currentQuestion: state.quiz[state.currentIndex + 1],
          currentIndex: state.currentIndex + 1,
        };
      }
    }
    default:
      return state;
  }
}
