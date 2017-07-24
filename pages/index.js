import React from 'react'
import Layout from '../components/layout'
import AboutContent from '../components/content/about'

import moment from 'moment'

export const IndexPage = () => (
    <Layout navActive="home">
        <AboutContent />
    </Layout>
)

export default IndexPage
