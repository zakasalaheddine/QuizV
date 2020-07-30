export const ANSWER_TYPES = {
  SET_DATA: "SET_DATA",
  CHANGE_USERNAME: "CHANGE_USERNAME",
};

export const answersInitialState = {
  creatorName: "",
  quizId: null,
  lang: "en",
  quiz: null,
  username: "",
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
    default:
      return state;
  }
}
