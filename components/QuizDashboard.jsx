import { ImageLogo, TitleStyled, LinkAsBuuton, ButtonStyled } from "./StyledTags";
import Steps from "./Steps";
import { FadeInAnnimation } from "./FramerMotionAnnimations";
import { PLATFORMS, getSocialMediaUrl } from "../helpers/ShareQuizHelpers";
import AnswersTable from "./AnswersTable";
import Axios from "axios";
import { useRouter } from "next/router";
import { Translate } from "lang/StaticTexts";
import { motion } from "framer-motion";
import Link from 'next/link'
import UrlToQuiz from "./UrlToQuiz";

const steps = [
  "Now simply share your quiz link with all your friends",
  "Your friends will try to match your answers"
]
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  },
  exit: { x: -300, opacity: 0 }
}
const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}
export default function QuizDashboard({ quizData }) {
  const { query: { quiz } } = useRouter();
  const url = `${process.env.NEXT_PUBLIC_APP_URL}/${quiz}`

  const handleDeleteQuiz = async () => {
    await Axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/user-quizzes/${quizData.id}/deleteAnswer`);
    localStorage.removeItem("QUIZV_SLUG")
    router.push('/')
  }

  return (
    <motion.div className="mb-5" variants={container} initial="hidden" animate="show">
      <TitleStyled variants={item}>{Translate["Your quiz is ready"][quizData.lang]}</TitleStyled>
      <UrlToQuiz url={url} />
      <Steps steps={steps} lang={quizData.lang} animation={item} />
      <AnswersTable answers={quizData.Answers} lang={quizData.lang} animation={item} />
      <div className="buttons my-5">
        <LinkAsBuuton
          variants={item}
          backColor="#3b5998" className="btn btn-block py-2"
          target="_blank"
          href={getSocialMediaUrl(PLATFORMS.FACEBOOK, url)}>
          <i className="fab fa-facebook-f"></i> {Translate["Share Quiz on"][quizData.lang]} Facebook
        </LinkAsBuuton>

        <LinkAsBuuton
          variants={item}
          backColor="#1cb06d" className="btn btn-block py-2"
          target="_blank"
          href={getSocialMediaUrl(PLATFORMS.WHATSAPP, `How Well do you know me ? ${url}`)}>
          <i className="fab fa-whatsapp"></i> {Translate["Share Quiz on"][quizData.lang]} Whatsapp
        </LinkAsBuuton>
        <LinkAsBuuton
          variants={item}
          backColor="#1da1f2" className="btn btn-block py-2"
          target="_blank"
          href={getSocialMediaUrl(PLATFORMS.TWIITER, `How Well do you know me ? ${url}`)}>
          <i className="fab fa-twitter"></i> {Translate["Share Quiz on"][quizData.lang]} Twitter
        </LinkAsBuuton>
        <Link href="/[quiz]/instagram" as={`/${quiz}/instagram`}>
          <LinkAsBuuton
            variants={item}
            backColor="#e4405f" className="btn btn-block py-2">
            <i className="fab fa-instagram"></i> {Translate["Share Quiz on"][quizData.lang]} Instagram's Bio
        </LinkAsBuuton>
        </Link>
        <Link href="/[quiz]/whatsapp" as={`/${quiz}/whatsapp`}>
          <LinkAsBuuton
            variants={item}
            backColor="#1cb06d" className="btn btn-block py-2">
            <i className="fab fa-whatsapp"></i> {Translate["Share Quiz on"][quizData.lang]} Whatsapp Status
        </LinkAsBuuton>
        </Link>
        <Link href="/[quiz]/snapchat" as={`/${quiz}/snapchat`}>
          <LinkAsBuuton
            variants={item}
            backColor="#fffc00" className="btn btn-block py-2 text-dark">
            <i className="fab fa-snapchat"></i> {Translate["Share Quiz on"][quizData.lang]} Snapchat
        </LinkAsBuuton>
        </Link>
      </div>
      <ButtonStyled variants={item} className="btn btn-block btn-danger" onClick={handleDeleteQuiz}>
        {Translate["Delete my quiz"][quizData.lang]}
      </ButtonStyled>
    </motion.div>
  )
}