import { useEffect, useState } from "react"
import { Translate } from "lang/StaticTexts";
import { motion } from "framer-motion";

export default function AnswersTable({ answers, lang, animation }) {
  const [quizAnswers, setQuizAnswers] = useState(answers)
  useEffect(() => {
    const sortedAnswers = answers.sort((a, b) => {
      if (a.score > b.score) return -1;
      if (a.score < b.score) return 1;
      return 0
    })
    setQuizAnswers(sortedAnswers)
  }, [answers])
  return (
    <motion.div className="answers-table" variants={animation}>
      {
        quizAnswers && (
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">{Translate["Name"][lang]}</th>
                <th scope="col">{Translate["Score"][lang]}</th>
              </tr>
            </thead>
            <tbody>
              {
                quizAnswers.map(({ id, username, score }) => (
                  <tr key={id}>
                    <td>{username}</td>
                    <td>{score}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        )
      }

    </motion.div>
  )
}