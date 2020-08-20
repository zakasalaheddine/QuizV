import { motion } from "framer-motion";
import { ImageLogo, TitleStyled } from "components/StyledTags";
import { Translate } from "lang/StaticTexts";
import CreateQuizContext from "context/CreateQuizContext";
import { useContext, useEffect } from "react";
import Link from "next/link";
import { LinkAsBuuton, ButtonStyled } from "../../components/StyledTags";
import { useRouter } from "next/router";
import Logo from "../../components/Logo";


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
  'Open Instagram',
  'Go to the Profile tab',
  'Tap the "Edit Profile" button'
]
const secondSteps = [
  'Paste your Quiz link into website box',
  'Save changes and you are done',
]
export default function InstagramPage() {
  const [{ selectedLang }] = useContext(CreateQuizContext)
  const router = useRouter();
  return (
    <motion.div className="col-md-8" animate="show" initial="hidden" variants={container} exit="exit">
      <Logo /> 
      <TitleStyled variants={item}>{Translate["Share Quiz on"][selectedLang]} Instagram's BIO</TitleStyled>
      <ul>
        {firstSteps.map((step, idx) => (<motion.li key={idx} variants={item}>{Translate[step][selectedLang]}</motion.li>))}
      </ul>
      <motion.img variants={item} className="img-fluid mb-3 shadow-sm" src="/assets/insta 2.png" alt="Instruction for insta Bio 1" />
      <br />
      <motion.img variants={item} className="img-fluid mb-3 shadow-sm" src="/assets/insta 1.png" alt="Instruction for insta Bio 1" />
      <ul>
        {secondSteps.map((step, idx) => (<motion.li key={idx} variants={item}>{Translate[step][selectedLang]}</motion.li>))}
      </ul>
      <ButtonStyled
        onClick={() => { router.back() }}
        variants={item} className="btn btn-dark btn-block py-2">
        {Translate["GO BACK"][selectedLang]}
      </ButtonStyled>
    </motion.div>
  )
}