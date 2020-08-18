import { CardStyled, ButtonStyled } from "../StyledTags";
import { useContext } from "react";
import AnswerQuizContext from "context/AnswerQuizContext";
import { selectAnswerToQuiz } from "context/AnswerQuizActions";
import ResultModal from "./ResultModal";
import { UpQuestion } from "../Ads";

export default function QuizzesContainer() {
  const [answerState, dispatchAnswer] = useContext(AnswerQuizContext)
  const { currentQuestion, lang } = answerState;
  const handleAnswerClick = (selectedAnswer) => {
    dispatchAnswer(selectAnswerToQuiz(selectedAnswer.id))
  }
  return (
    <>
      <UpQuestion />
      <div className="quizzes-container">
        <CardStyled variants={{
          initial: {
            opacity: 0,
            scale: 2,
          },
          animate: {
            opacity: 1,
            scale: 1,
          }
        }}
          initial="initial" animate="animate">
          <div className="card-header"><h3>{currentQuestion[lang]}</h3></div>
          <div className="card-body">
            {
              currentQuestion.QuizAnswer.map(answer => (
                <ButtonStyled
                  key={answer.id}
                  disabled={currentQuestion.isAnswered}
                  isCorrect={answer.isCorrect}
                  onClick={() => { handleAnswerClick(answer) }}
                  className={`btn btn-block ${answer.isClicked ? 'clicked' : ''}`}>
                  {answer[lang]}
                </ButtonStyled>
              ))
            }
          </div>
        </CardStyled>
      </div>
      <ResultModal isOn={currentQuestion.isAnswered} />
    </>
  )
}