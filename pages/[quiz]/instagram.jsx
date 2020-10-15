import { motion } from "framer-motion";
import { TitleStyled } from "components/StyledTags";
import { Translate } from "lang/StaticTexts";
import CreateQuizContext from "context/CreateQuizContext";
import { useContext } from "react";
import { item } from "../../helpers/FramerMotionAnimationValues";
import { AppContainer } from "../../components/Shared/AppContainer";
import { instagramFirstSteps, instagramSecondSteps } from "../../helpers/static/static-texts";
import GoBackButton from "../../components/GoBackButton";
import ListOfSteps from "../../components/ShareScreensComponents/ListOfSteps";

export default function InstagramPage() {
  const [{ selectedLang }] = useContext(CreateQuizContext)
  return (
    <AppContainer>
      <TitleStyled variants={item}>{Translate["Share Quiz on"][selectedLang]} Instagram's BIO</TitleStyled>
      <ListOfSteps steps={instagramFirstSteps} lang={selectedLang} />
      <motion.img variants={item} className="img-fluid mb-3 shadow-sm" src="/assets/insta 2.png" alt="Instruction for insta Bio 1" />
      <br />
      <motion.img variants={item} className="img-fluid mb-3 shadow-sm" src="/assets/insta 1.png" alt="Instruction for insta Bio 1" />
      <ListOfSteps steps={instagramSecondSteps} lang={selectedLang} />
      <GoBackButton />
    </AppContainer>
  )
}