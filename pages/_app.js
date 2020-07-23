import CreateQuizContext from "../context/CreateQuizContext";
import { useReducer } from "react";
import { CreateQuizReducer, initialState } from "../context/CreateQuizReducer";

const MyApp = ({ Component, pageProps, router }) => {
  const [quizState, dispatch] = useReducer(CreateQuizReducer, initialState);
  return (
    <CreateQuizContext.Provider value={[quizState, dispatch]}>
      <Component {...pageProps} key={router.asPath} />
    </CreateQuizContext.Provider>
  );
};
export default MyApp;
