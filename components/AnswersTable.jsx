import { useEffect, useState } from "react"

export default function AnswersTable({ answers }) {
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
    <div className="answers-table">
      {
        quizAnswers && (
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Score</th>
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

    </div>
  )
}