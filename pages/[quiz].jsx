import { useEffect, useState, useContext } from "react"
import { useRouter } from "next/router";
import QuizDashboard from "../components/QuizDashboard";
import { ImageLogo } from "../components/StyledTags";
import { FadeInAnnimation } from "../components/FramerMotionAnnimations";
import UserQuiz from "../components/UserQuiz";
import Axios from "axios";
import AnswerQuizContext from "../context/AnswerQuizContext";
import { setDataToAnswer } from "../context/AnswerQuizActions";

export default function QuizPage({ slug, data }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true)
  const [quizIsMine, setQuizIsMine] = useState(false)
  const [answerState, dispatchAnswer] = useContext(AnswerQuizContext)
  useEffect(() => {
    if (!data) {
      router.push("/")
      return;
    }
    const localSlug = localStorage.getItem("QUIZV_SLUG")
    if (localSlug && localSlug === slug) {
      setQuizIsMine(true)
    } else {
      dispatchAnswer(setDataToAnswer(data))
      setQuizIsMine(false)
    }
    setLoading(false)
  }, [])

  const renderCorrectComponent = () => {
    if (loading) return <p>Loading ....</p>
    if (quizIsMine) return <QuizDashboard slug={slug} />
    return <UserQuiz creator={answerState.creatorName} />
  }

  return (
    <div className="container">
      <main>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <ImageLogo initial="hidden" animate="visible" variants={FadeInAnnimation}
              src="https://webestiefy.com/bestimages/bestiefy.png"
              alt="Logo"
              className="img-fluid mx-auto d-block" />
            {renderCorrectComponent()}
          </div>
          <div className="col-md-2"></div>
        </div>
      </main>
    </div>
  )
}

export async function getServerSideProps({ params, res }) {
  try {
    const { quiz } = params
    const res = await Axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/user-quizzes?slug=${quiz}`)
    const quizData = res.data
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