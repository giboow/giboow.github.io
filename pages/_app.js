import App from 'next/app'
import {ThemeProvider} from 'styled-components'
import style from '../styles/index.scss'

import {config} from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Head from 'next/head'
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

import '../styles/index.scss'

export default class MyApp extends App {
    render() {
        const {Component, pageProps} = this.props
        return (
            <>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                </Head>
                <ThemeProvider theme={style}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </>
        )
    }
}
