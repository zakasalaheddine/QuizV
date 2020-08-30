import { useEffect, useState, useContext } from "react"
import { useRouter } from "next/router";
import QuizDashboard from "components/QuizDashboard";
import UserQuiz from "components/UserQuiz";
import Axios from "axios";
import AnswerQuizContext from "context/AnswerQuizContext";
import { setDataToAnswer } from "context/AnswerQuizActions";
import Results from "components/UserQuiz/Results";
import CreateQuizContext from "context/CreateQuizContext";
import { changeSelectedLang } from "context/CreateQuizActions";
import Logo from "components/Logo";
import Cookies from "cookies";

export default function QuizPage({ slug, data, isMine, isAlreadyAnswerd }) {
  const [quizIsMine, setQuizIsMine] = useState(false)
  const [alreadyAnswerd, setAlreadyAnswerd] = useState(false)
  const [answerState, dispatchAnswer] = useContext(AnswerQuizContext)
  const [_, dispatch] = useContext(CreateQuizContext)
  useEffect(() => {
    dispatch(changeSelectedLang(data.lang))
    setQuizIsMine(isMine)
    setAlreadyAnswerd(isAlreadyAnswerd)
    dispatchAnswer(setDataToAnswer(data))
  }, [])

  const renderCorrectComponent = () => {
    if (quizIsMine) return <QuizDashboard slug={slug} quizData={data} />
    if (alreadyAnswerd) return <Results />
    return <UserQuiz creator={answerState.creatorName} />
  }

  return (
    <div className="col-md-8">
      <Logo />
      {renderCorrectComponent()}
    </div>
  )
}

export async function getServerSideProps({ params, req, res }) {
  try {
    const { quiz } = params
    const result = await Axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/user-quizzes?slug=${quiz}`)
    const quizData = result.data
    if (quizData.length === 0 || result.data[0].isDeleted) {
      res.writeHead(302, { Location: '/' });
      res.end();
      return { props: {} }
    }
    if (quizData.length > 0) {
      const cookies = new Cookies(req, res);
      const localQuiz = cookies.get("QUIZV_SLUG");
      const isAlreadyAnswerd = cookies.get(quiz)
      return {
        props: { 
          slug: quiz, 
          data: quizData[0], 
          isMine: localQuiz === quiz, 
          isAlreadyAnswerd : !!isAlreadyAnswerd
        },
      }
    }
  } catch (error) {
    return {
      props: { slug: "", data: null }
    }
  }

}