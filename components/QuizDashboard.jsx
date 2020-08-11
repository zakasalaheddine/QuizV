import { ImageLogo, TitleStyled, LinkAsBuuton, ButtonStyled } from "./StyledTags";
import Steps from "./Steps";
import { FadeInAnnimation } from "./FramerMotionAnnimations";
import { PLATFORMS, getSocialMediaUrl } from "../helpers/ShareQuizHelpers";
import AnswersTable from "./AnswersTable";
import Axios from "axios";
import { useRouter } from "next/router";

const steps = [
  "Now simply share your quiz link with all your friends",
  "Your friends will try to match your answers & get a score out of 10."
]

export default function QuizDashboard({ quizData }) {
  const router = useRouter();
  const url = "https://google.com"
  const handleDeleteQuiz = async () => {
    await Axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/user-quizzes/${quizData.id}/deleteAnswer`);
    localStorage.removeItem("QUIZV_SLUG")
    router.push('/')
  }
  return (
    <div className="mb-5">
      <TitleStyled>Your quiz is ready</TitleStyled>
      <Steps steps={steps} />
      <AnswersTable answers={quizData.Answers} />
      <div className="buttons my-5">
        <LinkAsBuuton backColor="#3b5998" className="btn btn-block py-2"
          target="_blank"
          href={getSocialMediaUrl(PLATFORMS.FACEBOOK, url)}>
          <i className="fab fa-facebook-f"></i> Share Quiz on Facebook
        </LinkAsBuuton>

        <LinkAsBuuton backColor="#1cb06d" className="btn btn-block py-2"
          target="_blank"
          href={getSocialMediaUrl(PLATFORMS.WHATSAPP, `How Well do you know me ? ${url}`)}>
          <i className="fab fa-whatsapp"></i> Share Quiz on Whatsapp
        </LinkAsBuuton>
        <LinkAsBuuton backColor="#1da1f2" className="btn btn-block py-2"
          target="_blank"
          href={getSocialMediaUrl(PLATFORMS.TWIITER, `How Well do you know me ? ${url}`)}>
          <i className="fab fa-twitter"></i> Share Quiz on Whatsapp
        </LinkAsBuuton>
      </div>

      <ButtonStyled className="btn btn-block btn-danger" onClick={handleDeleteQuiz}>Delete my quiz</ButtonStyled>
    </div>
  )
}