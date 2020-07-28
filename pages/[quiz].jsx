import { useEffect } from "react"
import { useRouter } from "next/router";
import QuizDashboard from "../components/QuizDashboard";



export default function QuizPage({ slug }) {
  const router = useRouter();
  useEffect(() => {
    
  }, [])

  return (
    <QuizDashboard slug={slug} />
  )
}

export async function getServerSideProps(context) {
  const { params: { quiz } } = context
  return {
    props: { slug: quiz }, // will be passed to the page component as props
  }
}