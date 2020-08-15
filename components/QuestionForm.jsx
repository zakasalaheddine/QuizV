import { CardStyled, TextAreaStyled, ButtonStyled } from "./StyledTags";
import { motion } from 'framer-motion'
import { useContext } from "react";
import Answer from "./Answer";
import CreateQuizContext from "context/CreateQuizContext";
import { questionChanged, addAnswerToQuestions } from "context/CreateQuizActions";
import { Translate } from "lang/StaticTexts";

export default function QuestionForm({ question, animation }) {
  const [{ selectedLang }, dispatch] = useContext(CreateQuizContext)

  const handleQuestionChange = (event) => {
    dispatch(questionChanged(event.target.value, question.id))
  }

  const handleAddNewAnswer = () => {
    dispatch(addAnswerToQuestions(question.id))
  }

  return (
    <CardStyled variants={animation}>
      <div className="card-body row">
        <div className="col-12 mb-4">
          <TextAreaStyled className="form-control"
            onChange={handleQuestionChange}
            value={question[selectedLang]} />
        </div>
        {
          question.QuizAnswer.map(answer => (
            <Answer key={answer.id}
              answer={answer}
              questionId={question.id} />
          ))
        }
        <div className="col-12">
          <ButtonStyled onClick={handleAddNewAnswer} className="btn btn-primary btn-block">{Translate["Add New Answer"][selectedLang]}</ButtonStyled>
        </div>
      </div>
    </CardStyled>
  )
}