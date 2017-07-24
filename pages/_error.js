import {Component} from 'react'
import Layout from "../components/layout";

class Error extends Component {
    static getInitialProps ({ res, jsonPageRes }) {
        const statusCode = res ? res.statusCode : (jsonPageRes ? jsonPageRes.status : null)
        return { statusCode }
    }

    render () {
        return (
            <Layout>
                <section className="section">
                    <div className="container">
                        <article className="message is-warning">
                            <div className="message-body">
                            {this.props.statusCode
                                ? `An error ${this.props.statusCode} occurred on server`
                                : 'An error occurred on client'

                            }
                            </div>
                        </article>
                    </div>
                </section>
            </Layout>
        )
    }
}

export default Error
