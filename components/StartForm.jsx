import { LabelStyled, CardStyled, SelectStyled, InputTextStyled, ButtonStyled } from "./StyledTags";
import { SlideFromRightToLeft } from "./FramerMotionAnnimations";
import { useContext } from "react";
import CreateQuizContext from "context/CreateQuizContext";
import { changeUsername, changeSelectedLang, changeSteps, updateQuestionsWithUsername } from "context/CreateQuizActions";
import { Translate } from "lang/StaticTexts";

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
    code: "pt",
    name: "Português"
  },
]



export default function StartForm() {
  const [{ username, selectedLang, step }, dispatch] = useContext(CreateQuizContext);
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
  }

  return (
    <CardStyled className="card" small={true}
      variants={{
        initial: {
          opacity: 0,
          scale: 2,
        },
        animate: {
          opacity: 1,
          scale: 1,
          transition: {
            delay: 1.5,
            staggerChildren: 0.3
          }
        }
      }}
      initial="initial" animate="animate">
      <div className="card-body">
        <div className="mb-3">
          <LabelStyled htmlFor="language">{Translate["Select your language"][selectedLang]}</LabelStyled>
          <SelectStyled 
            className="custom-select" id="language" required value={selectedLang} onChange={handleChangeSelectedLang}>
            {
              Languages.map(lang => (
                <option key={lang.code} value={lang.code}>{lang.name}</option>
              ))
            }
          </SelectStyled>
        </div>

        <div className="mb-3">
          <LabelStyled htmlFor="username">{Translate["what is your name"][selectedLang]}</LabelStyled>
          <InputTextStyled type="text" className="form-control" id="username"
            placeholder="John..." value={username} onChange={handleChangeUsername} />
        </div>
        <ButtonStyled onClick={handleNextClick} className="btn btn-primary btn-block">{Translate["Next"][selectedLang]}</ButtonStyled>
      </div>
    </CardStyled>
  )
}