import { CardStyled, LabelStyled, InputTextStyled, ButtonStyled } from "../StyledTags";
import { useContext } from "react";
import AnswerQuizContext from "../../context/AnswerQuizContext";
import { changeResponderUserName } from "../../context/AnswerQuizActions";

export default function UserAnswerForm() {

  const [answerState, dispatchAnswer] = useContext(AnswerQuizContext)
  const handleUsernameChange = (event) => {
    dispatchAnswer(changeResponderUserName(event.target.value))
  }

  return (
    <CardStyled className="card" small={true}>

      <div className="card-body">
        <div className="mb-3">
          <LabelStyled htmlFor="username">what is your name</LabelStyled>
          <InputTextStyled value={answerState.username} type="text" className="form-control" id="username"
            placeholder="John..." onChange={handleUsernameChange} />
        </div>
        <ButtonStyled onClick={null} className="btn btn-primary btn-block">GET STARTED</ButtonStyled>
      </div>
    </CardStyled>
  )
}