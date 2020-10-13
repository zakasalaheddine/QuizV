import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { setQuestions } from "../context/CreateQuizActions";
import CreateQuizContext from "../context/CreateQuizContext";

export const useApp = (quiz) => {
  const [_, dispatch] = useContext(CreateQuizContext);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const localQuiz = localStorage.getItem("QUIZV_SLUG");
    if (localQuiz) {
      router.push("/[quiz]", `/${localQuiz}`);
    } else {
      dispatch(setQuestions(quiz.QuizQuestion));
      setLoading(false);
    }
  }, []);
  return { loading };
};
