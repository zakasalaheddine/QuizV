import { StepStyled } from "./StyledTags";
import { Translate } from "../lang/StaticTexts";
import { SlideFromRightToLeft } from "./FramerMotionAnnimations";

export default function Steps({ steps, lang, animation }) {

  return (
    <div className="d-block">
      {steps.map((step, idx) => (
        <StepStyled key={idx} variants={animation}>
          <div className="box shadow">
            <span className="circle"></span>
            <span className="text">{Translate[step][lang] || step}</span>
          </div>
        </StepStyled>
      ))}
    </div>
  )
}

