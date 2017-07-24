import {Component} from 'react'
import Head from 'next/head'
import Router from 'next/router'
import NProgressLib from 'nprogress'


class NProgess extends Component
{

    constructor(props) {
        super(props)

        Router.onRouteChangeStart = (url) => {
            NProgressLib.start()
        }

        Router.onAppUpdated = (nextRoute) => {
            NProgressLib.start()
        }

        Router.onRouteChangeComplete = () => NProgressLib.done()
        Router.onRouteChangeError = () => NProgressLib.done()
    }

    render() {
        return(
            <div>
                <Head>
                    <link rel='stylesheet' type='text/css' href='/static/css/nprogress.css' />
                </Head>
            </div>
        )
    }
}

export default NProgess
