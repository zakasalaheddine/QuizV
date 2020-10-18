import { InputTextStyled, ButtonStyled } from "styled/StyledTags";
import { useRef } from "react";

export default function UrlToQuiz({ url }) {
  const inputRef = useRef(null);
  const copyToClipboard = () => {
    inputRef.current.select();
    document.execCommand('copy');
  }
  return (
    <div className="quiz-url mx-auto my-2 text-center" style={{ width: "80%" }}>
      <InputTextStyled ref={inputRef} type="text" className="form-control text-center" value={url} onChange={null} />
      <ButtonStyled className="btn btn-info my-1" onClick={copyToClipboard}>COPY QUIZ LINK</ButtonStyled>
    </div>
  )
}