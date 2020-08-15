import axios from 'axios'
import { SlideFromRightToLeft, FadeInAnnimation } from '../components/FramerMotionAnnimations'
import { TitleStyled, ImageLogo } from '../components/StyledTags'
import Steps from '../components/Steps'
import StartForm from '../components/StartForm'
import { useContext, useEffect } from 'react'
import CreateQuizContext from '../context/CreateQuizContext'
import { setQuestions } from '../context/CreateQuizActions'
import QuestionsContainer from '../components/QuestionsContainer'
import { Translate } from '../lang/StaticTexts'

const steps = [
  "Let's create your quiz!",
  "Share it with your friends",
  "See their results & discover your real best friends"
]
export default function Home({ quiz }) {
  const [quizState, dispatch] = useContext(CreateQuizContext);
  const { selectedLang } = quizState
  useEffect(() => {
    dispatch(setQuestions(quiz.QuizQuestion))
  }, [])
  const returnSteppedComponent = () => {
    switch (quizState.step) {
      case 1:
        return (
          <>
            <Steps steps={steps} lang={selectedLang} />
            <StartForm />
          </>
        )
      case 2: {
        return <QuestionsContainer />
      }
      default:
        break
    }
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
            <TitleStyled variants={SlideFromRightToLeft} initial="initial" animate="animate">
              {Translate['How well do your friends know you ?'][selectedLang]}
            </TitleStyled>
            {returnSteppedComponent()}
          </div>
          <div className="col-md-2"></div>
        </div>
      </main>

      <footer>
      </footer>
    </div>
  )
}

export async function getServerSideProps(context) {
  const quiz = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/quizzes/1`);
  return {
    props: {
      quiz: quiz.data
    }, // will be passed to the page component as props
  }
}