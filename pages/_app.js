import CreateQuizContext from "../context/CreateQuizContext";
import { useReducer } from "react";
import { CreateQuizReducer, initialState } from "../context/CreateQuizReducer";
import {
  AnswerQuizReducer,
  answersInitialState,
} from "../context/AnswerQuizReducer";
import AnswerQuizContext from "../context/AnswerQuizContext";

const MyApp = ({ Component, pageProps, router }) => {
  const [quizState, dispatch] = useReducer(CreateQuizReducer, initialState);
  const [answerState, dispatchAnswer] = useReducer(
    AnswerQuizReducer,
    answersInitialState
  );
  return (
    <AnswerQuizContext.Provider value={[answerState, dispatchAnswer]}>
      <CreateQuizContext.Provider value={[quizState, dispatch]}>
        <Component {...pageProps} key={router.asPath} />
      </CreateQuizContext.Provider>
    </AnswerQuizContext.Provider>
  );
};
export default MyApp;
