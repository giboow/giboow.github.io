import Layout from "../components/layout";
import {getPostData, getSortedPostsData} from '../services/posts';

export async function getStaticProps(context) {
  const postsData = await getSortedPostsData('edito', 1);
  const editoData = postsData.find((p) => p.type === 'edito');
  let edito = null;
  if (editoData) {
    edito = await getPostData(editoData.id);
  }

  const posts = postsData.filter((p) => p.type !== 'edito').slice(0, 10);

  return {
    props: {
      edito, posts
    }, // will be passed to the page component as props
  }
}

export default ({edito, posts}) => (
  <Layout>
    <section className="section">
      <div className="container">
        <div className="columns is-mobile is-centered">
          <article className="column is-half">
            <h2 className="title is-2">{edito.title}</h2>
            <div className="is-primary content"
                 dangerouslySetInnerHTML={{__html: edito.contentHtml}}></div>
          </article>
        </div>
      </div>
    </section>

    <section className="section" style={{backgroundColor: "lightgrey"}}>
      <div className="container">
        <h2 className="title is-2 centered">Posts</h2>


        {posts && posts.length && posts.map((post) => (
          <div className="tile is-ancestor is-4">
            <article className="tile is-child notification is-primary">
              <p className="title">{post.title}</p>
              <button className="button is-small is-right">Voir</button>
            </article>
          </div>
        ))}
      </div>
    </section>
  </Layout>
)

