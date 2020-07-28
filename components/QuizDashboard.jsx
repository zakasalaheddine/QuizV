import { ImageLogo, TitleStyled, LinkAsBuuton } from "./StyledTags";
import Steps from "./Steps";
import { FadeInAnnimation } from "./FramerMotionAnnimations";
import { PLATFORMS, getSocialMediaUrl } from "../helpers/ShareQuizHelpers";

const steps = [
  "Now simply share your quiz link with all your friends",
  "Your friends will try to match your answers & get a score out of 10."
]

export default function QuizDashboard({ slug }) {
  const url = "https://google.com"
  return (
    <div className="container">
      <main>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <ImageLogo initial="hidden" animate="visible" variants={FadeInAnnimation}
              src="https://webestiefy.com/bestimages/bestiefy.png"
              alt="Logo"
              className="img-fluid mx-auto d-block" />
            <TitleStyled>Your quiz is ready</TitleStyled>
            <Steps steps={steps} />
            <div className="buttons my-5">
              <LinkAsBuuton backColor="#3b5998" className="btn btn-block py-4"
                target="_blank"
                href={getSocialMediaUrl(PLATFORMS.FACEBOOK, url)}>
                <i class="fab fa-facebook-f"></i> Share Quiz on Facebook
            </LinkAsBuuton>

              <LinkAsBuuton backColor="#1cb06d" className="btn btn-block py-4"
                target="_blank"
                href={getSocialMediaUrl(PLATFORMS.WHATSAPP, `How Well do you know me ? ${url}`)}>
                <i class="fab fa-whatsapp"></i> Share Quiz on Whatsapp
            </LinkAsBuuton>
              <LinkAsBuuton backColor="#1da1f2" className="btn btn-block py-4"
                target="_blank"
                href={getSocialMediaUrl(PLATFORMS.TWIITER, `How Well do you know me ? ${url}`)}>
                <i class="fab fa-twitter"></i> Share Quiz on Whatsapp
            </LinkAsBuuton>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </main>
    </div>
  )
}