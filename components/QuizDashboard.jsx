import { TitleStyled, ButtonStyled } from "./StyledTags";
import Steps from "./Steps";
import AnswersTable from "./AnswersTable";
import Axios from "axios";
import { useRouter } from "next/router";
import { Translate } from "lang/StaticTexts";
import { motion } from "framer-motion";
import UrlToQuiz from "./UrlToQuiz";
import { container, item } from "../helpers/FramerMotionAnimationValues";
import { dashboardSteps } from "../helpers/static/static-texts";
import ShareButtons from "./ShareScreensComponents/ShareButtons";

export default function QuizDashboard({ quizData }) {
  const { lang, Answers, id } = quizData
  const { query: { quiz } } = useRouter();
  const url = `${process.env.NEXT_PUBLIC_APP_URL}/${quiz}`

  const handleDeleteQuiz = async () => {
    await Axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/user-quizzes/${id}/deleteAnswer`);
    localStorage.removeItem("QUIZV_SLUG")
    router.push('/')
  }

  return (
    <motion.div className="mb-5" variants={container} initial="hidden" animate="show">
      <TitleStyled variants={item}>{Translate["Your quiz is ready"][lang]}</TitleStyled>
      <UrlToQuiz url={url} />
      <Steps steps={dashboardSteps} lang={quizData.lang} animation={item} />
      <AnswersTable answers={Answers} lang={lang} animation={item} />
      <ShareButtons lang={lang} url={url} quiz={quiz} />
      <ButtonStyled variants={item} className="btn btn-block btn-danger" onClick={handleDeleteQuiz}>
        {Translate["Delete my quiz"][lang]}
      </ButtonStyled>
    </motion.div>
  )
}