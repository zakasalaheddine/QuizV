import { LabelStyled, CardStyled, SelectStyled, InputTextStyled, ButtonStyled } from "./StyledTags";
import { SlideFromRightToLeft } from "./FramerMotionAnnimations";
import { useContext } from "react";
import CreateQuizContext from "../context/CreateQuizContext";
import { changeUsername, changeSelectedLang, changeSteps, updateQuestionsWithUsername } from "../context/CreateQuizActions";

const Languages = [
  {
    code: "fr",
    name: "Français"
  },
  {
    code: "en",
    name: "English"
  },
  {
    code: "ar",
    name: "Arabic"
  },
  {
    code: "es",
    name: "Español"
  },
  {
    code: "it",
    name: "Italiano"
  },
  {
    code: "po",
    name: "Português"
  },
  {
    code: "no",
    name: "Norsk"
  },
]

export default function StartForm() {
  const [quizState, dispatch] = useContext(CreateQuizContext);
  const { username, selectedLang, step } = quizState;
  const handleChangeUsername = (event) => {
    dispatch(changeUsername(event.target.value))
  }
  const handleChangeSelectedLang = (event) => {
    dispatch(changeSelectedLang(event.target.value))
  }
  const handleNextClick = () => {
    if (username !== "" && selectedLang !== "") {
      dispatch(updateQuestionsWithUsername())
      dispatch(changeSteps(2));
    }
    console.log(step);
  }

  return (
    <CardStyled className="card" small={true}>
      <div className="card-body">
        <div className="mb-3">
          <LabelStyled htmlFor="language">Select your language</LabelStyled>
          <SelectStyled variants={SlideFromRightToLeft} initial="initial" animate="animate"
            className="custom-select" id="language" required value={selectedLang} onChange={handleChangeSelectedLang}>
            {
              Languages.map(lang => (
                <option key={lang.code} value={lang.code}>{lang.name}</option>
              ))
            }
          </SelectStyled>
        </div>

        <div className="mb-3">
          <LabelStyled htmlFor="username">what is your name</LabelStyled>
          <InputTextStyled type="text" className="form-control" id="username"
            placeholder="John..." value={username} onChange={handleChangeUsername} />
        </div>
        <ButtonStyled onClick={handleNextClick} className="btn btn-primary btn-block">Next</ButtonStyled>
      </div>
    </CardStyled>
  )
}