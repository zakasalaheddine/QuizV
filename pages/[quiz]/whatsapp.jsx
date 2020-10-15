import { TitleStyled } from "components/StyledTags";
import { Translate } from "lang/StaticTexts";
import CreateQuizContext from "context/CreateQuizContext";
import { useContext } from "react";
import { whatsAppFirstSteps, whatsAppSecondSteps } from "../../helpers/static/static-texts";
import GoBackButton from "../../components/GoBackButton";
import { AppContainer } from "../../components/Shared/AppContainer";
import { item } from "../../helpers/FramerMotionAnimationValues";
import ListOfSteps from "../../components/ShareScreensComponents/ListOfSteps";
import ImageInstruction from "../../components/ShareScreensComponents/ImageInstruction";

export default function WhatsappPage() {
  const [{ selectedLang }] = useContext(CreateQuizContext)
  return (
    <AppContainer>
      <TitleStyled variants={item}>{Translate["Share Quiz on"][selectedLang]} Whatsapp Status</TitleStyled>
      <ListOfSteps steps={whatsAppFirstSteps} lang={selectedLang} />
      <ImageInstruction src="/assets/whatsapp 1.png" alt="Share on Whatsapp 1" />
      <ListOfSteps steps={whatsAppSecondSteps} lang={selectedLang} />
      <ImageInstruction src="/assets/whatsapp 2.png" alt="Share on Whatsapp 2" />
      <GoBackButton />
    </AppContainer>
  )
}