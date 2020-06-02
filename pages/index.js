import Layout from "../components/layout";
import {getPostData, getSortedPostsData} from '../services/posts';

export async function getStaticProps(context) {
  const posts = await getSortedPostsData('edito', 1);
  const editoData = posts.find((p) => p.type === 'edito');
  let edito = null;
  if (editoData) {
    edito = await getPostData(editoData.id);
  }

  return {
    props: {
      edito
    }, // will be passed to the page component as props
  }
}

export default ({edito}) => (
  <Layout>
    <section className="section">
      <div className="container">
        <div className="columns is-mobile is-centered">
          <article className="column is-half">
              <h2 className="title is-2">{edito.title}</h2>
              <div className="is-primary content" dangerouslySetInnerHTML={{__html: edito.contentHtml}}></div>
          </article>
        </div>
      </div>
    </section>
  </Layout>
)

