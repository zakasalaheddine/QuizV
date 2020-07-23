import { CREATION_TYPES } from "./CreateQuizReducer"

export const addSuggestedQuestions = questions => {
  return {
    type: CREATION_TYPES.ADD_SUGGESTED_QUESTIONS,
    payload: questions,
  }
}

export const questionChanged = (value, id) => {
  return {
    type: CREATION_TYPES.CHANGE_QUESTION,
    payload: { value, id },
  }
}

export const answerChanged = (value, questionId, answerId) => {
  return {
    type: CREATION_TYPES.CHANGE_ANSWER,
    payload: { value, questionId, answerId },
  }
}

export const addAnswerToQuestions = questionId => {
  return {
    type: CREATION_TYPES.ADD_NEW_ANSWER,
    payload: { id: questionId },
  }
}

export const removeAnswer = (questionId, answerId) => {
  return {
    type: CREATION_TYPES.REMOVE_ANSWER,
    payload: { questionId, answerId },
  }
}

export const selectCorrectAnswer = (questionId, answerId) => {
  return {
    type: CREATION_TYPES.SELECT_CORRECT_ANSWER,
    payload: { questionId, answerId },
  }
}

export const changeUsername = username => {
  return {
    type: CREATION_TYPES.CHANGE_USERNAME,
    payload: username,
  }
}

export const changeSelectedLang = lang => ({
  type: CREATION_TYPES.CHANGE_SELECTED_LANG,
  payload: lang,
})

export const changeSteps = step => ({
  type: CREATION_TYPES.CHANGE_STEP,
  payload: step,
})
