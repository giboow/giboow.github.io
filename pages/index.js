import Layout from "../components/layout";
import {getPostData, getSortedPostsData} from '../services/posts';
import PostItem from '../components/post/list/item';

import Hero from "../components/pages/about/hero"

export async function getStaticProps(context) {
  const posts = await getSortedPostsData();
  const editoData = posts.find((p) => p.type === 'edito');
  let edito = null;
  if (editoData) {
    edito = await getPostData(editoData.id);
  }


  return {
    props: {
      edito, posts
    }, // will be passed to the page component as props
  }
}

export default ({edito, posts}) => (
  <Layout>
    {/*{edito && (*/}
    {/*  <section className="section">*/}
    {/*    <div className="container">*/}
    {/*      <div className="columns is-mobile is-centered">*/}
    {/*        <article className="column is-half edito">*/}
    {/*          <h2 className="title is-2">{edito.title}</h2>*/}
    {/*          <div className="is-primary content"*/}
    {/*               dangerouslySetInnerHTML={{__html: edito.contentHtml}}></div>*/}
    {/*        </article>*/}
    {/*      </div>*/}
    {/*    </div>*/}
    {/*  </section>*/}
    {/*)}*/}


    <Hero></Hero>

    <section className="section is-fullheight">
      <div className="container">
        <h2 className="title is-2">Derniers posts</h2>
        <div className="columns is-multiline">
          {posts && posts.length > 0 && posts.map((post, idx) => (
            <div className="column is-12">
              <PostItem post={post}/>
            </div>
          ))}
        </div>
      </div>
    </section>
    <style jsx>{`
      .edito {
        background-color: #00d1b2;
        border-radius: 5px;
      }
      
      .edito .content {
        color : #717171;
      }
      
      .edito .title {
        color : #FFF;
      }
      
      .post {
        color: #FFF;
        background-color: hsl(204, 86%, 53%);
        border-radius: 5px;
        padding: 16px
      }
      .post .title {
        color: #FFF;
      }
    `}</style>
  </Layout>

)

