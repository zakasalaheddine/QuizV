
import { SlideFromRightToLeft, FadeInAnnimation } from './components/FramerMotionAnnimations'
import { TitleStyled, ImageLogo } from './components/StyledTags'
import Steps from './components/Steps'

export default function Home() {
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
            <TitleStyled variants={SlideFromRightToLeft} initial="initial" animate="animate">How well do your friends know you ?</TitleStyled>
            <Steps />
          </div>
          <div className="col-md-2"></div>
        </div>
      </main>

      <footer>
      </footer>
    </div>
  )
}
