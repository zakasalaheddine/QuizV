import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

import { setDataToAnswer } from "context/AnswerQuizActions";
import { changeSelectedLang } from "context/CreateQuizActions";
import AnswerQuizContext from "context/AnswerQuizContext";
import CreateQuizContext from "context/CreateQuizContext";

import QuizDashboard from "components/MyQuiz/QuizDashboard";
import UserQuiz from "components/UserQuiz";
import Results from "components/UserQuiz/Results";

export const useSingleQuizHandler = (quizData, slug) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [quizIsMine, setQuizIsMine] = useState(false);
  const [alreadyAnswerd, setAlreadyAnswerd] = useState(false);
  const [answerState, dispatchAnswer] = useContext(AnswerQuizContext);
  const [_, dispatch] = useContext(CreateQuizContext);

  const checkIfQuizIsMine = (slug) => {
    const localSlug = localStorage.getItem("QUIZV_SLUG");
    if (localSlug && localSlug === slug) return true;
    return false;
  };
  const checkIfQuizAlreadyAnswerd = (slug) => {
    const answers = localStorage.getItem(slug);
    if (answers) return true;
    return false;
  };
  useEffect(() => {
    if (!quizData) {
      router.push("/");
      return;
    }
    if (checkIfQuizIsMine(slug)) {
      setQuizIsMine(true);
      dispatch(changeSelectedLang(quizData.lang));
    } else {
      dispatchAnswer(setDataToAnswer(quizData));
      setQuizIsMine(false);
      if (checkIfQuizAlreadyAnswerd(slug)) setAlreadyAnswerd(true);
    }
    setLoading(false);
  }, []);

  const renderCorrectComponent = () => {
    if (loading) return <p>Loading ....</p>;
    if (quizIsMine) return <QuizDashboard slug={slug} quizData={quizData} />;
    if (alreadyAnswerd) return <Results />;
    return <UserQuiz creator={answerState.creatorName} />;
  };

  return { renderCorrectComponent };
};
