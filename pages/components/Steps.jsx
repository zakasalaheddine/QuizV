import { StepStyled } from "./StyledTags";

const steps = [
  "Let's create your quiz!",
  "Share it with your friends",
  "See their results & discover your real best friends"
]

export default function Steps() {
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

