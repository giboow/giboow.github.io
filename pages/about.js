import React from "react"
import Layout from "../components/layout"
import AboutContent from "../elements/about"
import Head from "next/head"

const keywords = [
    'CV',
    'Développeur',
    'FullStack',
    'Web',
    'PHP',
    'Rennes'
]

export const IndexPage = () => (
    <Layout navActive="about" subtitle="Developpeur FullStack Web">
        <Head>
            {keywords && (
                <meta name="keywords" content={keywords.join(',')} />
            )}

        </Head>
        <AboutContent />
    </Layout>
)

export default IndexPage
