import { ModalContainer, ResultContainer, TitleStyled, ButtonStyled, NextButton } from "../StyledTags";
import { AnimatePresence } from "framer-motion";
import { useContext } from "react";
import AnswerQuizContext from "context/AnswerQuizContext";
import { nextQuestion } from "context/AnswerQuizActions";
import Axios from "axios";
import { Translate } from "lang/StaticTexts";

export default function ResultModal({ isOn }) {
  const [answerState, dispatchAnswer] = useContext(AnswerQuizContext)
  const { currentQuestion: { isCorrect }, isEnd, quizId, username, score, quiz, lang } = answerState;
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
      answers: quiz,
      lang: lang
    }
    const result = await Axios.put(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/user-quizzes/${quizId}/answer`, data)
    localStorage.setItem(result.data.slug, JSON.stringify({ ...data, creatorName: result.data.username }))
  }
  return (
    <AnimatePresence>
      {
        isOn && (
          <ModalContainer>
            <ResultContainer initial={{ y: 300 }} animate={{ y: 0 }} exit={{ y: 200 }}>
              <TitleStyled>RESULT</TitleStyled>
              <TitleStyled>{isCorrect ? Translate["IT'S CORRECT"][answerState.lang] : Translate["IT'S NOT CORRECT"][answerState.lang]}</TitleStyled>
              <NextButton className={`btn btn-success`} onClick={nextQuestionHandler}>
                {isEnd ? Translate["SHOW RESULTS"][answerState.lang] : Translate["NEXT QUESTION"][answerState.lang]}
              </NextButton>
            </ResultContainer>
          </ModalContainer>
        )
      }
    </AnimatePresence>
  )
}