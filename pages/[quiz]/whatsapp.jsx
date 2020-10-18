import { TitleStyled } from "styled/StyledTags";
import { Translate } from "lang/StaticTexts";
import CreateQuizContext from "context/CreateQuizContext";
import { useContext } from "react";
import { whatsAppFirstSteps, whatsAppSecondSteps } from "helpers/static/static-texts";
import { AppContainer } from "components/Shared/AppContainer";
import { item } from "animations/basic";
import GoBackButton from "components/MyQuiz/GoBackButton";
import ListOfSteps from "components/MyQuiz/ListOfSteps";
import ImageInstruction from "components/MyQuiz/ImageInstruction";

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