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
import Head from "next/head";
import Footer from "../components/Footer";
import { AdsLeft, AdsRight } from "../components/Ads";

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
    <ThemeProvider theme={defaultTheme}>
      <AppOptionContext.Provider value={appOptions}>
        <AnswerQuizContext.Provider value={[answerState, dispatchAnswer]}>
          <CreateQuizContext.Provider value={[quizState, dispatch]}>
              {appOptions && (
                <>
                  <Head>
                    {appOptions.googleAnalyticsId && (
                      <>
                        <script
                          async
                          src={`https://www.googletagmanager.com/gtag/js?id=${appOptions.googleAnalyticsId}`}
                        ></script>
                        <script>
                          {` window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());

                      gtag('config', '${appOptions.googleAnalyticsId}');`}
                        </script>
                      </>
                    )}
                  </Head>
                  <DefaultSeo
                    openGraph={DefaultSEO.openGraph}
                    title={`${appOptions.slogan} • ${appOptions.siteName}`}
                  />
                </>
              )}
            <div className="container">
              <main>
                <div className="row">
                  <div className="col-md-2">
                    <AdsLeft />
                  </div>
                  <GlobalStyles />
                  <Component {...pageProps} />
                  <div className="col-md-2">
                    <AdsRight />
                  </div>
                </div>
              </main>
              <Footer />
            </div>
          </CreateQuizContext.Provider>
        </AnswerQuizContext.Provider>
      </AppOptionContext.Provider>
    </ThemeProvider>
  );
};
export default MyApp;
