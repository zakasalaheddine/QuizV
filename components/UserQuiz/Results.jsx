import AnswerQuizContext from "../../context/AnswerQuizContext"
import { useContext, useEffect, useState } from "react"
import { CardStyled, TitleStyled, ButtonStyled, LinkAsBuuton } from "../StyledTags"
import { useRouter } from "next/router"

export default function Results() {
  const [answerData, setAnswerData] = useState({ answers: [], score: 0, })
  const [{ creatorName }, dispatchAnswer] = useContext(AnswerQuizContext)
  const router = useRouter()
  useEffect(() => {
    const localAnswer = localStorage.getItem(router.asPath.replace('/', ''))
    const { answers, score } = JSON.parse(localAnswer)
    setAnswerData({ answers, score })
    console.log(JSON.parse(localAnswer))
  }, [])
  return (
    <div>
      <TitleStyled>Prove how well you know</TitleStyled>
      <TitleStyled>{creatorName}</TitleStyled>
      <CardStyled>
        <TitleStyled className="py-2">{`You scored ${answerData.score}/${answerData.answers.length}`}</TitleStyled>
      </CardStyled>
      <hr />
      <LinkAsBuuton href="/" backColor="#079992" className="btn btn-block btn-success">Create your own QUIZ</LinkAsBuuton>
    </div>
  )
}