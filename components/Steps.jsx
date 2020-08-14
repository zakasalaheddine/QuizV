import { StepStyled } from "./StyledTags";
import { Translate } from "../lang/StaticTexts";

export default function Steps({ steps, lang }) {

  return (
    <div className="d-block">
      {steps.map((step, idx) => (
        <StepStyled key={idx}>
          <div className="box shadow">
            <span className="circle"></span>
            <span className="text">{Translate[step][lang] || step}</span>
          </div>
        </StepStyled>
      ))}
    </div>
  )
}

