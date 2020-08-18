import { ImageLogo, CardStyled } from "components/StyledTags";
import { FadeInAnnimation } from "components/FramerMotionAnnimations";
import Axios from 'axios'
import ReactMarkdown from 'react-markdown'
import { NextSeo } from "next-seo";

export default function Page({ page: { title, content } }) {
  const SEO = {
    title: `${title} • quizv.com`
  }
  return (
    <>
      <NextSeo {...SEO} />
      <div className="container">
        <main>
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <ImageLogo initial="hidden" animate="visible" variants={FadeInAnnimation}
                src="https://webestiefy.com/bestimages/bestiefy.png"
                alt="Logo"
                className="img-fluid mx-auto d-block" />
              <CardStyled>
                <div className="card-header">
                  <h1>{title}</h1>
                </div>
                <div className="card-body">
                  <ReactMarkdown source={content} />
                </div>
              </CardStyled>
            </div>
            <div className="col-md-2"></div>
          </div>
        </main>
      </div>
    </>
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
