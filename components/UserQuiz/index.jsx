import UserAnswerForm from "./UserAnswerForm";
import { TitleStyled } from "../StyledTags";

export default function UserQuiz({ creator, quiz }) {
  return (
    <>

      <TitleStyled>Prove how well you know</TitleStyled>
      <TitleStyled>{creator}</TitleStyled>
      <UserAnswerForm />

    </>
  )
}