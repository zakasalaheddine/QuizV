import Axios from "axios";
import { AppContainer } from "components/Shared/AppContainer";
import { useSingleQuizHandler } from "hooks/useSingleQuizHandler";

export default function QuizPage({ slug, data }) {
  const { renderCorrectComponent } = useSingleQuizHandler(data, slug)
  return (
    <AppContainer>
      {renderCorrectComponent()}
    </AppContainer>
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