import Layout from "../../components/layout";
import {getAllPostIds, getPostData} from "../../services/posts";
import PostContent from "../../components/pages/post";
import Head from "next/head";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

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

    const {postData: {keywords, title, image}} = props;

    const router = useRouter();
    const [ogUrl, setOgUrl] = useState("");

    useEffect(() => {
        const host = window.location.host;
        const protocol = window.location.protocol;
        const baseUrl = `${protocol}//${host}`;

        setOgUrl(`${baseUrl}${router.asPath}`);
    }, [router.asPath]);

    return (
        <>
            <Head>
                {keywords && (
                    <meta name="keywords" content={keywords.join(',')}/>
                )}
                <meta name="title" content={title}/>
                <meta property="og:title" content={title} />
                <meta property="og:image" content={image}/>
                <meta name="twitter:image" content={image}/>


                <meta property="og:url" content={ogUrl} />
            </Head>
            <Layout title={title}>
                <PostContent {...props} />
            </Layout>
        </>
    )
}
