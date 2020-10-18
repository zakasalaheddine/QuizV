import { useRouter } from "next/router"
import { useContext } from "react"
import CreateQuizContext from "context/CreateQuizContext"
import { item } from "animations/basic"
import { ButtonStyled } from "styled/StyledTags"
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