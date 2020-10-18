import axios from 'axios'
import { TitleStyled } from 'styled/StyledTags'
import Steps from 'components/layout/Steps'
import StartForm from 'components/QuizCreation/StartForm'
import { useContext } from 'react'
import CreateQuizContext from 'context/CreateQuizContext'
import QuestionsContainer from 'components/QuizCreation/QuestionsContainer'
import { Translate } from 'lang/StaticTexts'
import { motion } from 'framer-motion'
import Loader from 'components/layout/Loader'
import { useApp } from 'hooks/useApp'
import { container, item } from 'animations/basic'
import { indexSteps } from 'helpers/static/static-texts'
import { AppContainer } from 'components/Shared/AppContainer'

export default function Home({ quiz }) {
  const [{ selectedLang, step }] = useContext(CreateQuizContext);
  const { loading } = useApp(quiz)

  const returnSteppedComponent = () => {
    switch (step) {
      case 1:
        return (
          <motion.div animate="show" initial="hidden" variants={container} exit="exit">
            <Steps steps={indexSteps} lang={selectedLang} animation={item} />
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
    <AppContainer>
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
    </AppContainer>
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