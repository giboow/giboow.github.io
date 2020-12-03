import React from "react"
import Layout from "../components/layout"
import AboutContent from "../components/pages/about"
import Head from "next/head"

const keywords = [
    'CV',
    'Développeur',
    'FullStack',
    'Web',
    'Rennes',
    'PHP',
    'CSS3',
    'Frontend',
    'Backend',
    'Github'
]

export const AboutPage = () => (
    <Layout navActive="about" subtitle="A propos">
        <Head>
            {keywords && (
                <meta name="keywords" content={keywords.join(',')} />
            )}
        </Head>
        <AboutContent />
    </Layout>
)

export default AboutPage
