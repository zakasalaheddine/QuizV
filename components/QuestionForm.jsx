import { CardStyled, TextAreaStyled, ButtonStyled } from "./StyledTags";
import { motion } from 'framer-motion'
import { useContext } from "react";
import Answer from "./Answer";
import CreateQuizContext from "../context/CreateQuizContext";
import { questionChanged, addAnswerToQuestions } from "../context/CreateQuizActions";

export default function QuestionForm({ question }) {
  const [_, dispatch] = useContext(CreateQuizContext)

  const handleQuestionChange = () => {
    dispatch(questionChanged(event.target.value, question.id))
  }

  const handleAddNewAnswer = () => {
    dispatch(addAnswerToQuestions(question.id))
  }

  return (
    <CardStyled>
      <div className="card-body row">
        <div className="col-12 mb-4">
          <TextAreaStyled className="form-control"
            onChange={handleQuestionChange}
            value={question.en} />
        </div>
        {
          question.QuizAnswer.map(answer => (
            <Answer key={answer.id}
              answer={answer}
              questionId={question.id} />
          ))
        }
        <div className="col-12">
          <ButtonStyled onClick={handleAddNewAnswer} className="btn btn-primary btn-block">Add New Answer</ButtonStyled>
        </div>
      </div>
    </CardStyled>
  )
}