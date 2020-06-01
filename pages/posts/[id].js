import Layout from "../../components/layout";
import {getAllPostIds, getPostData} from "../../services/posts";
import PostContent from "../../components/pages/post";
import Head from "next/head";

// Return a list of possible value for id
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  };
}

// Fetch necessary data for the blog post using params.id
export async function getStaticProps({params}) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData
    }
  };
}


export default function Post(props) {

  const {postData : {keywords}} = props;
  console.log(keywords)
  return (
    <Layout>
      <Head>
        {keywords && (
          <meta name="keywords" content={keywords.join(',')} />
        )}
      </Head>
      <PostContent {...props} />
    </Layout>
  )
}