import Document, {Html, Head, Main, NextScript} from 'next/document'
import {createStyleRegistry} from 'styled-jsx'

export default class MyDocument extends Document {
  static getInitialProps({renderPage}) {
    const {html, head, errorHtml, chunks} = renderPage()
    const registery = createStyleRegistry();
    const styles = registery.flush()
    return {html, head, errorHtml, chunks, styles}
  }

  render() {
    return (
      <Html className="has-navbar-fixed-top">
      <Head>
        <link rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"/>
        <link rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-dracula.min.css"/>
        <link href="https://fonts.googleapis.com/css?family=Roboto"
              rel="stylesheet"/>
        <link rel="shortcut icon" href="/static/images/icons/favicon.ico" />

      </Head>
      <body className="custom_class">
      {this.props.customValue}
      <Main />
      <NextScript />
      </body>
      </Html>
    )
  }
}
