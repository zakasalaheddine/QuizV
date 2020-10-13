import { CardStyled } from "components/StyledTags";
import Logo from "components/Logo";
import Axios from 'axios'
import ReactMarkdown from 'react-markdown'
import { NextSeo } from "next-seo";
import { AppContainer } from "../../components/Shared/AppContainer";


export default function Page({ page: { title, content } }) {
  const SEO = {
    title: `${title} • quizv.com`
  }
  return (
    <AppContainer>
      <NextSeo {...SEO} />
      <CardStyled>
        <div className="card-header">
          <h1>{title}</h1>
        </div>
        <div className="card-body">
          <ReactMarkdown source={content} />
        </div>
      </CardStyled>
    </AppContainer>
  )
}
export async function getServerSideProps({ params: { slug }, res }) {
  const result = await Axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/pages?slug=${slug}`);
  if (!result.data || result.data.length === 0) {
    res.writeHead(302, { Location: '/' });
    res.end();
    return { props: {} }
  }
  const page = result.data[0]
  return {
    props: { page }
  }
}
