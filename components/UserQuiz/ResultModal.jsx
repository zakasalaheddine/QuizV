import { ModalContainer, ResultContainer, TitleStyled, ButtonStyled, NextButton } from "../StyledTags";
import { AnimatePresence } from "framer-motion";
import { useContext, useEffect } from "react";
import AnswerQuizContext from "context/AnswerQuizContext";
import { nextQuestion } from "context/AnswerQuizActions";
import Axios from "axios";
import { Translate } from "lang/StaticTexts";
import useSound from 'use-sound';
import LostSound from 'sounds/lost.mp3'
import WinSound from 'sounds/win.mp3'
import { InResultModal } from "../Ads";

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
  const [playLost] = useSound(LostSound, { volume: 0.50 });
  const [playWin] = useSound(WinSound, { volume: 0.50 });
  useEffect(() => {

    if (isCorrect !== undefined && isCorrect !== null) {
      if (isCorrect) {
        console.log("Should Play")
        playWin();
      } else {
        
        console.log("Should Play 2")
        playLost()
      }
    }
  }, [isCorrect])
  return (
    <AnimatePresence>
      {
        isOn && (
          <ModalContainer>
            <ResultContainer initial={{ y: 300 }} animate={{ y: 0 }} exit={{ y: 200 }}>
              <TitleStyled>RESULT</TitleStyled>
              <TitleStyled>{isCorrect ? Translate["IT'S CORRECT"][answerState.lang] : Translate["IT'S NOT CORRECT"][answerState.lang]}</TitleStyled>
              <InResultModal />
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