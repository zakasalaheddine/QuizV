import UserAnswerForm from "./UserAnswerForm";
import { TitleStyled } from "../StyledTags";
import AnswerQuizContext from "../../context/AnswerQuizContext";
import { useContext } from "react";
import QuizzesContainer from "./QuizzesContainer";

export default function UserQuiz({ creator, quiz }) {

  const [answerState, dispatchAnswer] = useContext(AnswerQuizContext)
  return (
    <>

      <TitleStyled>Prove how well you know</TitleStyled>
      <TitleStyled>{creator}</TitleStyled>
      {
        answerState.quizStarted ? (<QuizzesContainer />) : (<UserAnswerForm />)
      }
    </>
  )
}