import CreateQuizContext from "../context/CreateQuizContext";
import { useReducer } from "react";
import { CreateQuizReducer, initialState } from "../context/CreateQuizReducer";
import {
  AnswerQuizReducer,
  answersInitialState,
} from "../context/AnswerQuizReducer";
import AnswerQuizContext from "../context/AnswerQuizContext";
import { ThemeProvider } from "emotion-theming";
import { defaultTheme } from "../themes/DefaultTheme";
import GlobalStyles from "../components/GlobalStyles";

const MyApp = ({ Component, pageProps, router }) => {
  const [quizState, dispatch] = useReducer(CreateQuizReducer, initialState);
  const [answerState, dispatchAnswer] = useReducer(
    AnswerQuizReducer,
    answersInitialState
  );
  return (
    <ThemeProvider theme={defaultTheme}>
      <AnswerQuizContext.Provider value={[answerState, dispatchAnswer]}>
        <CreateQuizContext.Provider value={[quizState, dispatch]}>
          <Component {...pageProps} key={router.asPath} />
          <GlobalStyles />
        </CreateQuizContext.Provider>
      </AnswerQuizContext.Provider>
    </ThemeProvider>
  );
};
export default MyApp;
