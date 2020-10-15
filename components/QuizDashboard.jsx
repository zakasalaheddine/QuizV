import { TitleStyled } from "./StyledTags";
import Steps from "./Steps";
import AnswersTable from "./AnswersTable";
import { useRouter } from "next/router";
import { Translate } from "lang/StaticTexts";
import { motion } from "framer-motion";
import UrlToQuiz from "./UrlToQuiz";
import { container, item } from "../helpers/FramerMotionAnimationValues";
import { dashboardSteps } from "../helpers/static/static-texts";
import ShareButtons from "./ShareScreensComponents/ShareButtons";
import DeleteQuizButton from "./ShareScreensComponents/DeleteQuizButton";

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