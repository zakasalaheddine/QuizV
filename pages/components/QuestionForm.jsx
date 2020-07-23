import { CardStyled, TextAreaStyled, Switch, DeleteButton } from "./StyledTags";
import { motion } from 'framer-motion'
import { useState } from "react";
import Answer from "./Answer";

export default function QuestionForm() {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <CardStyled>
      <div className="card-body row">
        <div className="col-12 mb-4">
          <TextAreaStyled className="form-control">📅 When is sasasa's birthday?</TextAreaStyled>
        </div>
        <Answer isSelected={isSelected} setIsSelected={setIsSelected} defaultValue="January 10" />
        <Answer isSelected={isSelected} setIsSelected={setIsSelected} defaultValue="September 23" />
        <Answer isSelected={isSelected} setIsSelected={setIsSelected} defaultValue="October 3" />
        <Answer isSelected={isSelected} setIsSelected={setIsSelected} defaultValue="December 27" />
      </div>
    </CardStyled>
  )
}