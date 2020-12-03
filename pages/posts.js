import Head from "next/head";
import Layout from "../components/layout";
import {getSortedPostsData} from "../services/posts";

import * as style from "./post.scss";
import LinkTitle from "../components/pages/post/linkTitle";

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
        </Head>
        <section className="section is-fullheight">
            <div className="container">

                    {posts && posts.length > 0 && posts.map((post, idx) => (
                        <article key={idx} className="column is-12">
                            <LinkTitle {...post}>

                            </LinkTitle>
                        </article>
                    ))}
                </div>

        </section>
    </Layout>);

export default PostPage;