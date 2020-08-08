import { ModalContainer, ResultContainer, TitleStyled, ButtonStyled } from "../StyledTags";
import { AnimatePresence } from "framer-motion";
import { useContext } from "react";
import AnswerQuizContext from "../../context/AnswerQuizContext";
import { nextQuestion } from "../../context/AnswerQuizActions";
import Axios from "axios";

export default function ResultModal({ isOn }) {
  const [answerState, dispatchAnswer] = useContext(AnswerQuizContext)
  const { currentQuestion: { isCorrect }, isEnd, quizId, username, score, quiz } = answerState;
  const nextQuestionHandler = async () => {
    if (isEnd) {
      await handleSaveResultToDataBase()
    }
    dispatchAnswer(nextQuestion())
  }
  const handleSaveResultToDataBase = async () => {
    const data = {
      username: username,
      score: score,
      answers: quiz
    }
    const result = await Axios.put(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/user-quizzes/${quizId}/answer`, data)
    console.log(result.data)
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