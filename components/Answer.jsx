import { Switch, TextAreaStyled, DeleteButton } from "./StyledTags";
import { motion } from "framer-motion";
import { useContext } from "react";
import CreateQuizContext from "../context/CreateQuizContext";
import { answerChanged, selectCorrectAnswer, removeAnswer } from "../context/CreateQuizActions";

export default function Answer({ answer, questionId }) {
  const [{ selectedLang }, dispatch] = useContext(CreateQuizContext);

  const handleAnswerChanged = (event) => {
    dispatch(answerChanged(event.target.value, questionId, answer.id));
  }

  const handleSelectCorrectAnswer = () => {
    dispatch(selectCorrectAnswer(questionId, answer.id))
  }

  const handleRemoveAnswer = () => {
    dispatch(removeAnswer(questionId, answer.id))
  }

  return (
    <div className="col-lg-6 col-md-12 mb-4 d-flex justify-content-around align-items-center">
      <Switch isSelected={answer.isSelected} animate onClick={handleSelectCorrectAnswer}>
        <motion.div animate />
      </Switch>
      <TextAreaStyled className="form-control"
        onChange={handleAnswerChanged}
        value={answer[selectedLang]} />
      <DeleteButton className="btn btn-danger" onClick={handleRemoveAnswer}>
        <i className="fas fa-ban"></i>
      </DeleteButton>
    </div>
  )
}