import { useContext } from "react";
import UserAnswerForm from "./UserAnswerForm";
import AnswerQuizContext from "context/AnswerQuizContext";
import QuizzesContainer from "./QuizzesContainer";
import Results from "./Results";

export default function UserQuiz({ creator }) {

  const [answerState, dispatchAnswer] = useContext(AnswerQuizContext)
  const { quizStarted, showResults } = answerState;
  
  const renderComponent = () => {
    if (showResults) return <Results />
    if (quizStarted) return <QuizzesContainer />
    return <UserAnswerForm />
  }
  return (
    <>

      {renderComponent()}
    </>
  )
}