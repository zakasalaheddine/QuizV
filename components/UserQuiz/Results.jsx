import AnswerQuizContext from "../../context/AnswerQuizContext"
import { useContext } from "react"
import { CardStyled, TitleStyled } from "../StyledTags"

export default function Results() {

  const [answerState, dispatchAnswer] = useContext(AnswerQuizContext)
  const { quiz, score } = answerState
  return (
    <>
      <CardStyled>
        <TitleStyled>{`You scored ${score}/${quiz.length}`}</TitleStyled>
      </CardStyled>
    </>
  )
}