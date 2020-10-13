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

export default function QuizPage({ slug, data }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true)
  const [quizIsMine, setQuizIsMine] = useState(false)
  const [alreadyAnswerd, setAlreadyAnswerd] = useState(false)
  const [answerState, dispatchAnswer] = useContext(AnswerQuizContext)
  const [_, dispatch] = useContext(CreateQuizContext)
  useEffect(() => {
    if (!data) {
      router.push("/")
      return;
    }
    const localSlug = localStorage.getItem("QUIZV_SLUG")
    if (localSlug && localSlug === slug) {
      setQuizIsMine(true)
      dispatch(changeSelectedLang(data.lang))
    } else {
      const AnswersData = localStorage.getItem(slug)
      if (AnswersData) {
        setAlreadyAnswerd(true)
      }
      dispatchAnswer(setDataToAnswer(data))
      setQuizIsMine(false)
    }
    setLoading(false)
  }, [])

  const renderCorrectComponent = () => {
    if (loading) return <p>Loading ....</p>
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

export async function getServerSideProps({ params, res }) {
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
      return {
        props: { slug: quiz, data: quizData[0] },
      }
    }
  } catch (error) {
    return {
      props: { slug: "", data: null }
    }
  }

}