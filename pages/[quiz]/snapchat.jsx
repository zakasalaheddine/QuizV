import { TitleStyled } from "components/StyledTags";
import { Translate } from "lang/StaticTexts";
import CreateQuizContext from "context/CreateQuizContext";
import { useContext } from "react";
import { item } from "../../helpers/FramerMotionAnimationValues";
import { snapchatFirstSteps, snapchatSecondSteps } from "../../helpers/static/static-texts";
import { AppContainer } from "../../components/Shared/AppContainer";
import GoBackButton from "../../components/GoBackButton";
import ListOfSteps from "../../components/ShareScreensComponents/ListOfSteps";
import ImageInstruction from "../../components/ShareScreensComponents/ImageInstruction";


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