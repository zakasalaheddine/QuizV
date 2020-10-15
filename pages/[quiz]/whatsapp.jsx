import { motion } from "framer-motion";
import { TitleStyled } from "components/StyledTags";
import { Translate } from "lang/StaticTexts";
import CreateQuizContext from "context/CreateQuizContext";
import { useContext } from "react";
import { whatsAppFirstSteps, whatsAppSecondSteps } from "../../helpers/static/static-texts";
import GoBackButton from "../../components/GoBackButton";
import { AppContainer } from "../../components/Shared/AppContainer";
import { item } from "../../helpers/FramerMotionAnimationValues";

export default function WhatsappPage() {
  const [{ selectedLang }] = useContext(CreateQuizContext)
  return (
    <AppContainer>
      <TitleStyled variants={item}>{Translate["Share Quiz on"][selectedLang]} Whatsapp Status</TitleStyled>
      <ul>
        {whatsAppFirstSteps.map((step, idx) => (<motion.li key={idx} variants={item}>{Translate[step][selectedLang]}</motion.li>))}
      </ul>
      <motion.img variants={item} className="img-fluid mb-3 shadow-sm" src="/assets/whatsapp 1.png" alt="Instruction for insta Bio 1" />
      <ul>
        {whatsAppSecondSteps.map((step, idx) => (<motion.li key={idx} variants={item}>{Translate[step][selectedLang]}</motion.li>))}
      </ul>
      <motion.img variants={item} className="img-fluid mb-3 shadow-sm" src="/assets/whatsapp 2.png" alt="Instruction for insta Bio 1" />
      <GoBackButton />
    </AppContainer>
  )
}