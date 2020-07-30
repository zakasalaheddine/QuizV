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
