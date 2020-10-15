import { motion } from "framer-motion";
import { TitleStyled } from "components/StyledTags";
import { Translate } from "lang/StaticTexts";
import CreateQuizContext from "context/CreateQuizContext";
import { useContext } from "react";
import { item } from "../../helpers/FramerMotionAnimationValues";
import { snapchatFirstSteps, snapchatSecondSteps } from "../../helpers/static/static-texts";
import { AppContainer } from "../../components/Shared/AppContainer";
import GoBackButton from "../../components/GoBackButton";


export default function SnapChatPage() {
  const [{ selectedLang }] = useContext(CreateQuizContext)
  return (
    <AppContainer>
      <TitleStyled variants={item}>{Translate["Share Quiz on"][selectedLang]} Snapchat</TitleStyled>
      <ul>
        {snapchatFirstSteps.map((step, idx) => (<motion.li key={idx} variants={item}>{Translate[step][selectedLang]}</motion.li>))}
      </ul>
      <motion.img variants={item} className="img-fluid mb-3 shadow-sm" src="/assets/snap 1.png" alt="Instruction for insta Bio 1" />
      <ul>
        {snapchatSecondSteps.map((step, idx) => (<motion.li key={idx} variants={item}>{Translate[step][selectedLang]}</motion.li>))}
      </ul>
      <motion.img variants={item} className="img-fluid mb-3 shadow-sm" src="/assets/snap 2.png" alt="Instruction for insta Bio 1" />
      <GoBackButton />
    </AppContainer>
  )
}