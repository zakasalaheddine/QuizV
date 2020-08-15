import { motion } from "framer-motion";
import { ImageLogo, TitleStyled } from "components/StyledTags";
import { Translate } from "lang/StaticTexts";

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

export default function InstagramPage() {
  return (
    <motion.div className="col-md-8" animate="show" initial="hidden" variants={container} exit="exit">
      <ImageLogo variants={item}
        src="https://webestiefy.com/bestimages/bestiefy.png"
        alt="Logo"
        className="img-fluid mx-auto d-block" />
      <TitleStyled variants={item}>
        {/* {Translate['How well do your friends know you ?'][selectedLang]} */}
      </TitleStyled>
    </motion.div>
  )
}