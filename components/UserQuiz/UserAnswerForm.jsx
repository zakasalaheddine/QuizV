import { CardStyled, LabelStyled, InputTextStyled, ButtonStyled } from "styled/StyledTags";
import { useContext } from "react";
import AnswerQuizContext from "context/AnswerQuizContext";
import { changeResponderUserName, startQuiz } from "context/AnswerQuizActions";
import { Translate } from "lang/StaticTexts";
import { container } from 'animations/basic'

export default function UserAnswerForm() {

  const [answerState, dispatchAnswer] = useContext(AnswerQuizContext)
  const handleUsernameChange = (event) => {
    dispatchAnswer(changeResponderUserName(event.target.value))
  }

  const startTheQuiz = () => {
    dispatchAnswer(startQuiz())
  }

  return (
    <CardStyled variants={container}
      initial="initial" animate="animate" className="card" small={true}>
      <div className="card-body">
        <div className="mb-3">
          <LabelStyled htmlFor="username">{Translate["what is your name"][answerState.lang]}</LabelStyled>
          <InputTextStyled value={answerState.username} type="text" className="form-control" id="username"
            placeholder="John..." onChange={handleUsernameChange} />
        </div>
        <ButtonStyled onClick={startTheQuiz} className="btn btn-primary btn-block">{Translate['Next'][answerState.lang]}</ButtonStyled>
      </div>
    </CardStyled>
  )
}