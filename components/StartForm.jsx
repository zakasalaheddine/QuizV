import { LabelStyled, CardStyled, SelectStyled, InputTextStyled, ButtonStyled } from "./StyledTags";
import { SlideFromRightToLeft } from "./FramerMotionAnnimations";

export default function StartForm() {
  return (
    <CardStyled className="card" small={true}>
      <div className="card-body">
        <div className="mb-3">
          <LabelStyled htmlFor="location">Where are you from</LabelStyled>
          <SelectStyled className="custom-select" id="location" required>
            <option>North America</option>
            <option>South America</option>
            <option>Europe</option>
            <option>Asia</option>
            <option>Africa</option>
          </SelectStyled>
        </div>
        <div className="mb-3">
          <LabelStyled htmlFor="language">Select a language</LabelStyled>
          <SelectStyled variants={SlideFromRightToLeft} initial="initial" animate="animate"
            className="custom-select" id="language" required>
            <option>English</option>
            <option>Espanol</option>
            <option>Français</option>
          </SelectStyled>
        </div>

        <div className="mb-3">
          <LabelStyled htmlFor="username">what is your name</LabelStyled>
          <InputTextStyled type="text" className="form-control" id="username"
            placeholder="John..." />
        </div>
        <ButtonStyled className="btn btn-primary btn-block">Next</ButtonStyled>
      </div>
    </CardStyled>
  )
}