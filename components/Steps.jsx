import { StepStyled } from "./StyledTags";

export default function Steps({ steps }) {
  return (
    <div className="d-block">
      {steps.map((step, idx) => (
        <StepStyled key={idx}>
          <div className="box shadow">
            <span className="circle"></span>
            <span className="text">{step}</span>
          </div>
        </StepStyled>
      ))}
    </div>
  )
}

