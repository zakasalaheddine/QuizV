import { motion } from "framer-motion";
import { ImageLogo, TitleStyled } from "components/StyledTags";
import { Translate } from "lang/StaticTexts";
import CreateQuizContext from "context/CreateQuizContext";
import { useContext, useEffect } from "react";
import Link from "next/link";
import { LinkAsBuuton, ButtonStyled } from "../../components/StyledTags";
import { useRouter } from "next/router";


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
const firstSteps = [
  'Open Whatsapp',
  'Go to the Status tab',
  'Tap the floating Pencil icon at the bottom'
]
const secondSteps = [
  'Type your invitation and paste your Quiz link',
  'Tap Send button',
]
export default function WhatsappPage() {
  const [{ selectedLang }] = useContext(CreateQuizContext)
  const router = useRouter();
  return (
    <motion.div className="col-md-8" animate="show" initial="hidden" variants={container} exit="exit">
      <ImageLogo variants={item}
        src="https://webestiefy.com/bestimages/bestiefy.png"
        alt="Logo"
        className="img-fluid mx-auto d-block" />
      <TitleStyled variants={item}>{Translate["Share Quiz on"][selectedLang]} Whatsapp Status</TitleStyled>
      <ul>
        {firstSteps.map((step, idx) => (<motion.li key={idx} variants={item}>{Translate[step][selectedLang]}</motion.li>))}
      </ul>
      <motion.img variants={item} className="img-fluid mb-3 shadow-sm" src="/assets/whatsapp 1.png" alt="Instruction for insta Bio 1" />
      <ul>
        {secondSteps.map((step, idx) => (<motion.li key={idx} variants={item}>{Translate[step][selectedLang]}</motion.li>))}
      </ul>
      <motion.img variants={item} className="img-fluid mb-3 shadow-sm" src="/assets/whatsapp 2.png" alt="Instruction for insta Bio 1" />
      <ButtonStyled
        onClick={() => { router.back() }}
        variants={item} className="btn btn-dark btn-block py-2 mb-3">
        {Translate["GO BACK"][selectedLang]}
      </ButtonStyled>
    </motion.div>
  )
}