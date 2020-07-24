import axios from 'axios'
import { SlideFromRightToLeft, FadeInAnnimation } from '../components/FramerMotionAnnimations'
import { TitleStyled, ImageLogo } from '../components/StyledTags'
import Steps from '../components/Steps'
import StartForm from '../components/StartForm'
import { useContext, useEffect } from 'react'
import CreateQuizContext from '../context/CreateQuizContext'
import { setQuestions } from '../context/CreateQuizActions'
import QuestionsContainer from '../components/QuestionsContainer'

export default function Home({ quiz }) {
  const [quizState, dispatch] = useContext(CreateQuizContext);

  useEffect(() => {
    dispatch(setQuestions(quiz.QuizQuestion))
  }, [])
  const returnSteppedComponent = () => {
    switch (quizState.step) {
      case 1:
        return (
          <>
            <Steps />
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
              How well do your friends know you ?
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
  const quiz = await axios.get('http://localhost:1337/quizzes/1');
  return {
    props: {
      quiz: quiz.data
    }, // will be passed to the page component as props
  }
}