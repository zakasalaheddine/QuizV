import { useContext } from "react";
import QuestionForm from "./QuestionForm";
import CreateQuizContext from "../context/CreateQuizContext";

export default function QuestionsContainer() {

  const [quizState] = useContext(CreateQuizContext);
  const { questions } = quizState;
  return (
    <>
      {
        questions.map(question => (
          <QuestionForm key={question.id} question={question} />
        ))
      }
    </>
  )
}