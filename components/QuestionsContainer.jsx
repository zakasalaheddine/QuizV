import { useContext } from "react";
import QuestionForm from "./QuestionForm";
import CreateQuizContext from "../context/CreateQuizContext";
import { ButtonStyled } from "./StyledTags";
import { validateQuestionsHasSelectedAnswers, generateRandomSlug } from "../helpers/CreateQuizHelpers";
import axios from 'axios';
import { useRouter } from 'next/router'

export default function QuestionsContainer() {
  const router = useRouter();
  const [quizState] = useContext(CreateQuizContext);
  const { questions, username, selectedLang } = quizState;
  const handleSubmitQuestions = async () => {
    if (validateQuestionsHasSelectedAnswers(questions)) {
      const data = {
        username: username,
        slug: generateRandomSlug(),
        lang: selectedLang,
        quiz: questions
      }
      const res = await axios.post(process.env.NEXT_PUBLIC_BACKEND_API_URL + "/user-quizzes", data);
      const { slug } = res.data;
      localStorage.setItem("QUIZV_SLUG", slug);
      router.push(`/${slug}`)
      return;
    }
    console.log(false);
  }
  return (
    <>
      {
        questions.map(question => (
          <QuestionForm key={question.id} question={question} />
        ))
      }

      <div className="col-12 pb-5">
        <ButtonStyled onClick={handleSubmitQuestions} className="btn btn-danger btn-block">Create Your Quiz</ButtonStyled>
      </div>
    </>
  )
}