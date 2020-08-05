import { ANSWER_TYPES } from "./AnswerQuizReducer";

export const setDataToAnswer = (data) => {
  const { username, id, lang, quiz } = data;
  return {
    type: ANSWER_TYPES.SET_DATA,
    payload: { creator: username, id, lang, quiz },
  };
};

export const changeResponderUserName = (username) => {
  return {
    type: ANSWER_TYPES.CHANGE_USERNAME,
    payload: username,
  };
};

export const startQuiz = () => {
  return { type: ANSWER_TYPES.START_QUIZ };
};

export const selectAnswerToQuiz = (id) => {
  return {
    type: ANSWER_TYPES.SELECT_ANSWER,
    payload: { answerId: id },
  };
};

export const nextQuestion = () => {
  return {
    type: ANSWER_TYPES.NEXT_QUESTION
  }
}
