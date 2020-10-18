import { TitleStyled } from "styled/StyledTags";
import { Translate } from "lang/StaticTexts";
import CreateQuizContext from "context/CreateQuizContext";
import { useContext } from "react";
import { item } from "animations/basic";
import { snapchatFirstSteps, snapchatSecondSteps } from "helpers/static/static-texts";
import { AppContainer } from "components/Shared/AppContainer";
import GoBackButton from "components/MyQuiz/GoBackButton";
import ListOfSteps from "components/MyQuiz/ListOfSteps";
import ImageInstruction from "components/MyQuiz/ImageInstruction";


export default function SnapChatPage() {
  const [{ selectedLang }] = useContext(CreateQuizContext)
  return (
    <AppContainer>
      <TitleStyled variants={item}>{Translate["Share Quiz on"][selectedLang]} Snapchat</TitleStyled>
      <ListOfSteps steps={snapchatFirstSteps} lang={selectedLang} />
      <ImageInstruction src="/assets/snap 1.png" alt="Share on SnapChat 1" />
      <ListOfSteps steps={snapchatSecondSteps} lang={selectedLang} />
      <ImageInstruction src="/assets/snap 2.png" alt="Share on SnapChat 2" />
      <GoBackButton />
    </AppContainer>
  )
}