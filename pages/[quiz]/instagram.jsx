import { TitleStyled } from "components/StyledTags";
import { Translate } from "lang/StaticTexts";
import CreateQuizContext from "context/CreateQuizContext";
import { useContext } from "react";
import { item } from "../../helpers/FramerMotionAnimationValues";
import { AppContainer } from "../../components/Shared/AppContainer";
import { instagramFirstSteps, instagramSecondSteps } from "../../helpers/static/static-texts";
import GoBackButton from "../../components/GoBackButton";
import ListOfSteps from "../../components/ShareScreensComponents/ListOfSteps";
import ImageInstruction from "../../components/ShareScreensComponents/ImageInstruction";

export default function InstagramPage() {
  const [{ selectedLang }] = useContext(CreateQuizContext)
  return (
    <AppContainer>
      <TitleStyled variants={item}>{Translate["Share Quiz on"][selectedLang]} Instagram's BIO</TitleStyled>
      <ListOfSteps steps={instagramFirstSteps} lang={selectedLang} />
      <ImageInstruction src="/assets/insta 2.png" alt="Instruction for insta Bio 2" />
      <br />
      <ImageInstruction src="/assets/insta 1.png" alt="Instruction for insta Bio 1" />
      <ListOfSteps steps={instagramSecondSteps} lang={selectedLang} />
      <GoBackButton />
    </AppContainer>
  )
}