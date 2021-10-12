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
    <>
        <Head>
            <meta name="title" content="Site personnel de Philippe Gibert"/>
            <meta name="description" content="Développeur Web depuis plus de 10 ans, j'ai une bonne connaissance des techniques back-end et front-end.
                                J'aime faire une veille constante sur l'ecosysteme web et découvrir de nouvelles technologies.
                                Passionné d'internet, de jeux de sociétés et de tout ce qui tourne autour de l'univers geek et high tech, je vous fais partager mes passions
                                à travers mon blog."/>
            {keywords && (
                <meta name="keywords" content={keywords.join(',')}/>
            )}
        </Head>

        <Layout navActive="about" subtitle="A propos">

            <AboutContent/>
        </Layout>
    </>
)

export default AboutPage
