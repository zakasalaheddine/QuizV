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
import { DefaultSeo } from "next-seo";
import { DefaultSEO } from "../helpers/DefaultSEO";

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
          <DefaultSeo { ...DefaultSEO  } />
          <div className="container">
            <main>
              <div className="row">
                <div className="col-md-2"></div>
                <GlobalStyles />
                <Component {...pageProps} key={router.asPath} />
                <div className="col-md-2"></div>
              </div>
            </main>
            <footer></footer>
          </div>
        </CreateQuizContext.Provider>
      </AnswerQuizContext.Provider>
    </ThemeProvider>
  );
};
export default MyApp;
