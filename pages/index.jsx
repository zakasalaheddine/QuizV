
import { SlideFromRightToLeft, FadeInAnnimation } from '../components/FramerMotionAnnimations'
import { TitleStyled, ImageLogo } from '../components/StyledTags'
import Steps from '../components/Steps'
import StartForm from '../components/StartForm'
import QuestionForm from '../components/QuestionForm'
import { useContext } from 'react'
import CreateQuizContext from '../context/CreateQuizContext'

export default function Home() {
  const [quizState] = useContext(CreateQuizContext);

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
        return <QuestionForm />
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
