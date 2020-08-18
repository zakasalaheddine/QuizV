import CreateQuizContext from "../context/CreateQuizContext";
import { useReducer, useState, useEffect } from "react";
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
import Axios from "axios";
import Loader from "../components/Loader";
import AppOptionContext from "../context/AppOptionsContext";

const MyApp = ({ Component, pageProps, router }) => {
  const [quizState, dispatch] = useReducer(CreateQuizReducer, initialState);
  const [answerState, dispatchAnswer] = useReducer(
    AnswerQuizReducer,
    answersInitialState
  );
  const [appOptions, setAppOptions] = useState(null);
  useEffect(() => {
    const loadAppOptions = async () => {
      const result = await Axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/options`
      );
      setAppOptions(result.data);
    };
    loadAppOptions();
  }, []);
  return (
    <AppOptionContext.Provider value={appOptions}>
      <ThemeProvider theme={defaultTheme}>
        <AnswerQuizContext.Provider value={[answerState, dispatchAnswer]}>
          <CreateQuizContext.Provider value={[quizState, dispatch]}>
            <div className="container">
              {appOptions ? (
                <main>
                  <div className="row">
                    <div className="col-md-2">
                      <div 
                        className="position-fixed d-none d-sm-none d-md-block"
                        dangerouslySetInnerHTML={{
                          __html: appOptions.adsLeft,
                        }}
                      />
                    </div>
                    <GlobalStyles />
                    <DefaultSeo
                      openGraph={DefaultSEO.openGraph}
                      title={`${appOptions.slogan} • ${appOptions.siteName}`}
                    />
                    <Component {...pageProps} key={router.asPath} />
                    <div className="col-md-2">
                    <div
                        className="position-fixed d-none d-sm-none d-md-block"
                        dangerouslySetInnerHTML={{
                          __html: appOptions.rightAds,
                        }}
                      />
                    </div>
                  </div>
                </main>
              ) : (
                <Loader />
              )}
              <footer></footer>
            </div>
          </CreateQuizContext.Provider>
        </AnswerQuizContext.Provider>
      </ThemeProvider>
    </AppOptionContext.Provider>
  );
};
export default MyApp;
