import { getLastId } from "../helpers/CreateQuizHelpers";

export const CREATION_TYPES = {
  CHANGE_USERNAME: "CHANGE_USERNAME",
  CHANGE_SELECTED_LANG: "CHANGE_SELECTED_LANG",
  UPDATE_QUESTIONS_WITH_USERNAME: "UPDATE_QUESTIONS_WITH_USERNAME",
  SET_QUESTIONS: "SET_QUESTIONS",
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

    case CREATION_TYPES.SET_QUESTIONS: {
      return {
        ...state,
        questions: payload,
      };
    }

    case CREATION_TYPES.UPDATE_QUESTIONS_WITH_USERNAME: {
      const updatedQuestions = state.questions.map((question) => {
        question[state.selectedLang] = question[state.selectedLang].replace(
          "[USERNAME]",
          state.username
        );
        return question;
      });
      return {
        ...state,
        questions: updatedQuestions,
      };
    }

    case CREATION_TYPES.CHANGE_QUESTION: {
      const { value, id } = payload;
      const updatedQuestions = state.questions.map((question) => {
        if (question.id === id) {
          question[state.selectedLang] = value;
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
      const updatedAnswers = selectedQuestion.QuizAnswer.map((item) => {
        if (item.id === answerId) {
          item[state.selectedLang] = value;
        }
        return item;
      });
      selectedQuestion.QuizAnswer = updatedAnswers;
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
      const { id } = payload;
      const updatedQuestions = state.questions.map((question) => {
        if (question.id === id) {
          question.QuizAnswer.push({
            id: getLastId(state.questions) + 1,
            [state.selectedLang]: "",
          });
        }
        return question;
      });
      return {
        ...state,
        questions: updatedQuestions,
      };
    }

    case CREATION_TYPES.REMOVE_ANSWER: {
      const { answerId, questionId } = payload;
      const selectedQuestion = state.questions.find(
        (question) => question.id === questionId
      );
      const updatedAnswers = selectedQuestion.QuizAnswer.filter((item) => {
        if (item.id !== answerId) {
          return item;
        }
      });
      selectedQuestion.QuizAnswer = updatedAnswers;
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

    case CREATION_TYPES.SELECT_CORRECT_ANSWER: {
      const { answerId, questionId } = payload;
      const selectedQuestion = state.questions.find(
        (question) => question.id === questionId
      );
      const updatedAnswers = selectedQuestion.QuizAnswer.map((item) => {
        return { ...item, isSelected: item.id === answerId };
      });
      selectedQuestion.QuizAnswer = updatedAnswers;
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

    case CREATION_TYPES.CHANGE_STEP: {
      return {
        ...state,
        step: payload,
      };
    }

    default:
      return state;
  }
}
