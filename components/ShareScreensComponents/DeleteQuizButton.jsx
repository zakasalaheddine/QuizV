import Axios from "axios";
import { Translate } from "lang/StaticTexts";
import { useRouter } from "next/router";
import { useState } from "react";
import { item } from "../../helpers/FramerMotionAnimationValues";
import { ButtonStyled } from "../StyledTags";

export default function DeleteQuizButton({ lang, id }) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const handleDeleteQuiz = async () => {
    setLoading(true)
    await Axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/user-quizzes/${id}/deleteAnswer`);
    localStorage.removeItem("QUIZV_SLUG")
    router.push('/')
    setLoading(false)
  }
  return (
    <ButtonStyled variants={item} className="btn btn-block btn-danger" onClick={handleDeleteQuiz}>
      {loading ? 'Loading...' : Translate["Delete my quiz"][lang]}
    </ButtonStyled>
  )
}