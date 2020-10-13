import axios from 'axios'
import { TitleStyled } from 'components/StyledTags'
import Steps from 'components/Steps'
import StartForm from 'components/StartForm'
import { useContext, useEffect, useState } from 'react'
import CreateQuizContext from 'context/CreateQuizContext'
import { setQuestions } from 'context/CreateQuizActions'
import QuestionsContainer from 'components/QuestionsContainer'
import { Translate } from 'lang/StaticTexts'
import { motion } from 'framer-motion'
import Logo from '../components/Logo'
import Loader from 'components/Loader'
import { useRouter } from 'next/router'

const steps = [
  "Let's create your quiz!",
  "Share it with your friends",
  "See their results & discover your real best friends"
]
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  },
  exit: { x: -300, opacity: 0 }
}
const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}
export default function Home({ quiz }) {
  const [quizState, dispatch] = useContext(CreateQuizContext);
  const { selectedLang } = quizState
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const localQuiz = localStorage.getItem("QUIZV_SLUG")
    if (localQuiz) {
      router.push('/[quiz]', `/${localQuiz}`)
    } else {
      dispatch(setQuestions(quiz.QuizQuestion))
      setLoading(false)
    }
  }, [])
  const returnSteppedComponent = () => {
    switch (quizState.step) {
      case 1:
        return (
          <motion.div animate="show" initial="hidden" variants={container} exit="exit">
            <Steps steps={steps} lang={selectedLang} animation={item} />
            <StartForm />
          </motion.div>
        )
      case 2: {
        return <QuestionsContainer />
      }
      default:
        break
    }
  }
  return (
    <motion.div className="col-md-8" animate="show" initial="hidden" variants={container}>
      <Logo />
      {
        loading ? (
          <Loader />
        ) : (
            <>
              <TitleStyled variants={item}>
                {Translate['How well do your friends know you ?'][selectedLang]}
              </TitleStyled>
              {returnSteppedComponent()}
            </>
          )
      }
    </motion.div>
  )
}

export async function getServerSideProps(context) {
  const quiz = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/quizzes/1`);
  return {
    props: {
      quiz: quiz.data,
    }, // will be passed to the page component as props
  }
}