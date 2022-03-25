import Layout from "../components/layout";
import {getPostData, getSortedPostsData} from '../services/posts';
import PostItem from '../components/post/list/item';


import Hero from "../components/pages/about/hero"
import Head from "next/head"

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

const IndexPage = ({posts}) => (
    <>
        <Head>
            <meta name="title" content="Site personnel de Philippe Gibert"/>
            <meta name="description" content="Développeur Web depuis plus de 10 ans, j'ai une bonne connaissance des techniques back-end et front-end.
                                J'aime faire une veille constante sur l'ecosysteme web et découvrir de nouvelles technologies.
                                Passionné d'internet, de jeux de sociétés et de tout ce qui tourne autour de l'univers geek et high tech, je vous fais partager mes passions
                                à travers mon blog."/>
        </Head>
        <Layout navActive={"accueil"}>
            <Hero></Hero>

            <section className="section is-fullheight">
                <div className="container">
                    <h2 className="title is-2">Derniers posts</h2>
                    <div className="columns is-multiline">
                        {posts && posts.length > 0 && posts.map((post, idx) => (
                            <div key={idx} className="column is-4">

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
    </>

)


export default IndexPage;
