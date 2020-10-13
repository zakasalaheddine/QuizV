import { useContext } from "react";
import QuestionForm from "./QuestionForm";
import CreateQuizContext from "../context/CreateQuizContext";
import { ButtonStyled } from "./StyledTags";
import { validateQuestionsHasSelectedAnswers, generateRandomSlug } from "../helpers/CreateQuizHelpers";
import axios from 'axios';
import { useRouter } from 'next/router'
import { Translate } from "lang/StaticTexts";
import { motion } from "framer-motion";
import AppOptionContext from "../context/AppOptionsContext";
import { container, item } from "../helpers/FramerMotionAnimationValues";

export default function QuestionsContainer() {
  const router = useRouter();
  const [quizState] = useContext(CreateQuizContext);
  const appOptions = useContext(AppOptionContext)
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
    <motion.div variants={container} initial="hidden" animate="show">
      {
        questions.map(question => (
          <QuestionForm key={question.id} question={question} animation={item} />
        ))
      }
      <div
        className="d-flex justify-content-center  mb-3"
        dangerouslySetInnerHTML={{
          __html: appOptions.underQuestion,
        }}
      />
      <div className="col-12 pb-5">
        <ButtonStyled onClick={handleSubmitQuestions} className="btn btn-danger btn-block">{Translate["Create Your Quiz"][selectedLang]}</ButtonStyled>
      </div>

    </motion.div>
  )
}