import Document, {Html, Head, Main, NextScript} from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps({renderPage}) {
    const {html, head, errorHtml, chunks} = renderPage()
    const styles = flush()
    return {html, head, errorHtml, chunks, styles}
  }

  render() {
    return (
      <Html className="has-navbar-fixed-top">
      <Head>
        <link rel="stylesheet"
              href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
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
