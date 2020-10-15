import { useRouter } from "next/router"
import { useContext } from "react"
import CreateQuizContext from "../context/CreateQuizContext"
import { item } from "../helpers/FramerMotionAnimationValues"
import { ButtonStyled } from "./StyledTags"
import { Translate } from "lang/StaticTexts";

export default function GoBackButton() {
  const [{ selectedLang }] = useContext(CreateQuizContext)
  const router = useRouter()
  return (
    <ButtonStyled
      onClick={() => { router.back() }}
      variants={item} className="btn btn-dark btn-block py-2">
      {Translate["GO BACK"][selectedLang]}
    </ButtonStyled>
  )
}