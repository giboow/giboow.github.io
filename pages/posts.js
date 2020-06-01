import {Component} from 'react'
import Layout from '../components/layout'

export default class IndexPage extends Component {
    static async getInitialProps ({ query, res }) {
        const post = query.slug

        if (!post && res) {
            res.statusCode = 404
        }

        return { post }
    }


    render() {
        const {post} = this.props;
        return (
            <Layout navActive="post">
                <div>{post}</div>
            </Layout>
        )
    }
}

