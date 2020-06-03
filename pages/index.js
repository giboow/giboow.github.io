import Layout from "../components/layout";
import {getPostData, getSortedPostsData} from '../services/posts';
import classnames from 'classnames';
import moment from 'moment';

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
    {edito && (
      <section className="section">
        <div className="container">
          <div className="columns is-mobile is-centered">
            <article className="column is-half edito">
              <h2 className="title is-2">{edito.title}</h2>
              <div className="is-primary content"
                   dangerouslySetInnerHTML={{__html: edito.contentHtml}}></div>
            </article>
          </div>
        </div>
      </section>
    )}

    <section className="section" style={{backgroundColor: "lightgrey"}}>
      <div className="container">
        <div className="columns is-ancestor is-multiline">
          {posts && posts.length && posts.slice(0, 10).map((post, idx) => (
            <div
              className={classnames("column", {"is-12": idx === 0, 'is-one-quarter': idx !== 0})}>
              <article className="post has-text-centered ">
                <time
                  datetime={moment.utc(post.date).format()}>{moment(post.date).format('LL')}</time>
                <p className="title">{post.title}</p>
              </article>
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

