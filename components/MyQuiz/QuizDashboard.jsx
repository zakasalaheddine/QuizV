import { TitleStyled } from "styled/StyledTags";
import { useRouter } from "next/router";
import { Translate } from "lang/StaticTexts";
import { motion } from "framer-motion";
import { container, item } from "animations/basic";
import { dashboardSteps } from "helpers/static/static-texts";

import Steps from "../layout/Steps";
import AnswersTable from "./AnswersTable";
import UrlToQuiz from "./UrlToQuiz";
import ShareButtons from "./ShareButtons";
import DeleteQuizButton from "./DeleteQuizButton";

export default function QuizDashboard({ quizData }) {
  const { lang, Answers, id } = quizData
  const { query: { quiz } } = useRouter();
  const url = `${process.env.NEXT_PUBLIC_APP_URL}/${quiz}`

  return (
    <motion.div className="mb-5" variants={container} initial="hidden" animate="show">
      <TitleStyled variants={item}>{Translate["Your quiz is ready"][lang]}</TitleStyled>
      <UrlToQuiz url={url} />
      <Steps steps={dashboardSteps} lang={quizData.lang} animation={item} />
      <AnswersTable answers={Answers} lang={lang} animation={item} />
      <ShareButtons lang={lang} url={url} quiz={quiz} />
      <DeleteQuizButton lang={lang} id={id} />
    </motion.div>
  )
}