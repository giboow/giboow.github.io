import App from 'next/app'
import { ThemeProvider } from 'styled-components'

import style from '../styles/index.scss'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={style}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}