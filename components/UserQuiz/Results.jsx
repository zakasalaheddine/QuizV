import AnswerQuizContext from "context/AnswerQuizContext"
import { useContext, useEffect, useState } from "react"
import { CardStyled, TitleStyled, ButtonStyled, LinkAsBuuton } from "../StyledTags"
import { useRouter } from "next/router"
import { Translate } from "lang/StaticTexts"
import Link from 'next/link'
import { UnderQuestion } from "../Ads"

export default function Results() {
  const [answerData, setAnswerData] = useState({ answers: [], score: 0, lang: "en" })
  const [{ creatorName }, dispatchAnswer] = useContext(AnswerQuizContext)
  const router = useRouter()
  useEffect(() => {
    const localAnswer = localStorage.getItem(router.asPath.replace('/', ''))
    const { answers, score, lang } = JSON.parse(localAnswer)
    setAnswerData({ answers, score, lang })
    console.log(JSON.parse(localAnswer))
  }, [])

  const getResultTitleBaseOnPercent = () => {
    console.log(answerData.answers.length )
    if (answerData.answers.length > 0) {
      const valuePercent = answerData.score / answerData.answers.length * 100;
      console.log({valuePercent} )
      if (valuePercent <= 25) return Translate["Such a bad friend"][answerData.lang]
      if (valuePercent < 50) return Translate["Not that bad"][answerData.lang]
      if (valuePercent <= 75) return Translate["Such a good friend"][answerData.lang]
      if (valuePercent <= 100) return Translate["You are the best"][answerData.lang]
      return Translate["Such a bad friend"][answerData.lang]
    }

  }
  return (
    <div>
      <TitleStyled>{getResultTitleBaseOnPercent()}</TitleStyled>
      <CardStyled>
        <TitleStyled className="py-2">{`${Translate["You have got"][answerData.lang]} ${answerData.score}/${answerData.answers.length}`}</TitleStyled>
      </CardStyled>
      <hr />
      <UnderQuestion />
      <Link href="/">
        <LinkAsBuuton backColor="#079992" className="btn btn-block btn-success">
          {Translate["Create your own QUIZ"][answerData.lang]}
        </LinkAsBuuton>
      </Link>
    </div>
  )
}