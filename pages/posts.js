import Head from "next/head";
import Layout from "../components/layout";
import {getSortedPostsData} from "../services/posts";

import PostItem from "../components/post/list/item";

const keywords = [
    'posts', 'billets', 'developpement'
]

export async function getStaticProps(context) {
    const posts = await getSortedPostsData();

    return {
        props: {
            posts
        },
    }
}

const PostPage = ({posts}) => (
    <Layout navActive="posts" subtitle="A propos">
        <Head>
            {keywords && (
                <meta name="keywords" content={keywords.join(',')}/>
            )}
            <meta name="title" content="Les derniers posts de Philippe Gibert"/>
            <meta name="description" content="Ici vous trouverez mes derniers posts!"/>
        </Head>
        <section className="section is-fullheight">
            <div className="container">
                <div className="columns is-multiline">
                    {posts && posts.length > 0 && posts.map((post, idx) => (
                        <div key={idx} className="column is-4">

                            <PostItem post={post}/>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    </Layout>);

export default PostPage;
