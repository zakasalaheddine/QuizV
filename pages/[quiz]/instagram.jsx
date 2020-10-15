import { motion } from "framer-motion";
import { TitleStyled } from "components/StyledTags";
import { Translate } from "lang/StaticTexts";
import CreateQuizContext from "context/CreateQuizContext";
import { useContext } from "react";
import { item } from "../../helpers/FramerMotionAnimationValues";
import { AppContainer } from "../../components/Shared/AppContainer";
import { instagramFirstSteps, instagramSecondSteps } from "../../helpers/static/static-texts";
import GoBackButton from "../../components/GoBackButton";

export default function InstagramPage() {
  const [{ selectedLang }] = useContext(CreateQuizContext)
  return (
    <AppContainer>
      <TitleStyled variants={item}>{Translate["Share Quiz on"][selectedLang]} Instagram's BIO</TitleStyled>
      <ul>
        {instagramFirstSteps.map((step, idx) => (<motion.li key={idx} variants={item}>{Translate[step][selectedLang]}</motion.li>))}
      </ul>
      <motion.img variants={item} className="img-fluid mb-3 shadow-sm" src="/assets/insta 2.png" alt="Instruction for insta Bio 1" />
      <br />
      <motion.img variants={item} className="img-fluid mb-3 shadow-sm" src="/assets/insta 1.png" alt="Instruction for insta Bio 1" />
      <ul>
        {instagramSecondSteps.map((step, idx) => (<motion.li key={idx} variants={item}>{Translate[step][selectedLang]}</motion.li>))}
      </ul>
      <GoBackButton />
    </AppContainer>
  )
}