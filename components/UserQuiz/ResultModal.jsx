import { ModalContainer, ResultContainer, TitleStyled, ButtonStyled } from "../StyledTags";
import { AnimatePresence } from "framer-motion";
import { useContext } from "react";
import AnswerQuizContext from "../../context/AnswerQuizContext";
import { nextQuestion } from "../../context/AnswerQuizActions";

export default function ResultModal({ isOn }) {
  const [answerState, dispatchAnswer] = useContext(AnswerQuizContext)
  const { currentQuestion: { isCorrect }, isEnd } = answerState;
  const nextQuestionHandler = () => {
    dispatchAnswer(nextQuestion())
  }
  return (
    <AnimatePresence>
      {
        isOn && (
          <ModalContainer>
            <ResultContainer initial={{ y: 300 }} animate={{ y: 0 }} exit={{ y: 200 }}>
              <TitleStyled>RESULT</TitleStyled>
              <TitleStyled>{isCorrect ? "IT'S CORRECT" : "IT'S NOT CORRECT"}</TitleStyled>
              <ButtonStyled className={`btn btn-success`} onClick={nextQuestionHandler}>
                {isEnd ? "SHOW RESULTS" : "NEXT QUESTION"}
              </ButtonStyled>
            </ResultContainer>
          </ModalContainer>
        )
      }
    </AnimatePresence>
  )
}