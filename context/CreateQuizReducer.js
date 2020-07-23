export const CREATION_TYPES = {
  CHANGE_USERNAME: "CHANGE_USERNAME",
  CHANGE_SELECTED_LANG: "CHANGE_SELECTED_LANG",
  ADD_SUGGESTED_QUESTIONS: "ADD_SUGGESTED_QUESTIONS",
  CHANGE_QUESTION: "CHANGE_QUESTION",
  CHANGE_ANSWER: "CHANGE_ANSWER",
  ADD_NEW_ANSWER: "ADD_NEW_ANSWER",
  SELECT_CORRECT_ANSWER: "SELECT_CORRECT_ANSWER",
  REMOVE_ANSWER: "REMOVE_ANSWER",
  CHANGE_STEP: "CHANGE_STEP",
};
export const initialState = {
  username: "",
  selectedLang: "en",
  questions: [],
  step: 1, //? STEP 1 => SELECT USERNAME || STEP 2 => QUESTIONS EDITOR || STEP 3 => SHARE QUESTIONS
};
export function CreateQuizReducer(
  state = initialState,
  { type, payload = null }
) {
  switch (type) {
    case CREATION_TYPES.CHANGE_USERNAME: {
      return {
        ...state,
        username: payload,
      };
    }

    case CREATION_TYPES.CHANGE_SELECTED_LANG: {
      return {
        ...state,
        selectedLang: payload,
      };
    }

    case CREATION_TYPES.CHANGE_QUESTION: {
      const { value, id } = payload;
      const updatedQuestions = state.questions.map((question) => {
        if (question.id === id) {
          question.question[state.selectedLang] = value;
        }
        return question;
      });
      return {
        ...state,
        questions: updatedQuestions,
      };
    }

    case CREATION_TYPES.CHANGE_ANSWER: {
      const { value, questionId, answerId } = payload;
      const selectedQuestion = state.questions.find(
        (question) => question.id === questionId
      );
      const updatedAnswers = selectedQuestion.answers.map((item) => {
        if (item.id === answerId) {
          item.answer[state.selectedLang] = value;
        }
        return item;
      });
      selectedQuestion.answers = updatedAnswers;
      const updatedQuestions = state.questions.map((item) => {
        if (item.id === selectedQuestion.id) {
          item = selectedQuestion;
        }
        return item;
      });
      return {
        ...state,
        questions: updatedQuestions,
      };
    }

    case CREATION_TYPES.ADD_NEW_ANSWER: {
      const { id } = payload
      const updatedQuestions = state.questions.map(question => {
        if (question.id === id) {
          question.answers.push({
            id: getLastId(state.questions) + 1,
            answer: {
              [state.selectedLang]: "",
            },
          })
        }
        return question
      })
      return {
        ...state,
        questions: updatedQuestions,
      }
    }
   
    case CREATION_TYPES.REMOVE_ANSWER: {
      const { answerId, questionId } = payload
      const selectedQuestion = state.questions.find(
        question => question.id === questionId
      )
      const updatedAnswers = selectedQuestion.answers.filter(item => {
        if (item.id !== answerId) {
          return item
        }
      })
      selectedQuestion.answers = updatedAnswers
      const updatedQuestions = state.questions.map(item => {
        if (item.id === selectedQuestion.id) {
          item = selectedQuestion
        }
        return item
      })
      return {
        ...state,
        questions: updatedQuestions,
      }
    }

    case CREATION_TYPES.SELECT_CORRECT_ANSWER: {
      const { answerId, questionId } = payload
      const selectedQuestion = state.questions.find(
        question => question.id === questionId
      )
      const updatedAnswers = selectedQuestion.answers.map(item => {
        return { ...item, isSelected: item.id === answerId }
      })
      selectedQuestion.answers = updatedAnswers
      const updatedQuestions = state.questions.map(item => {
        if (item.id === selectedQuestion.id) {
          item = selectedQuestion
        }
        return item
      })
      return {
        ...state,
        questions: updatedQuestions,
      }
    }

    case CREATION_TYPES.CHANGE_STEP: {
      return {
        ...state,
        step: payload,
      }
    }

    default:
      return state;
  }
}
