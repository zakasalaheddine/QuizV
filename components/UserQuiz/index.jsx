import UserAnswerForm from "./UserAnswerForm";
import { TitleStyled } from "../StyledTags";
import AnswerQuizContext from "../../context/AnswerQuizContext";
import { useContext } from "react";
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

      <TitleStyled>Prove how well you know</TitleStyled>
      <TitleStyled>{creator}</TitleStyled>
      {renderComponent()}
    </>
  )
}