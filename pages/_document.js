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

        <meta name="title" content="Site personnel de Philippe Gibert"/>
        <meta name="description" content="Développeur Web depuis plus de 10 ans, j'ai une bonne connaissance des techniques back-end et front-end.
                            J'aime faire une veille constante sur l'ecosysteme web et découvrir de nouvelles technologies.
                            Passionné d'internet, de jeux de sociétés et de tout ce qui tourne autour de l'univers geek et high tech, je vous fais partager mes passions
                            à travers mon blog."/>

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
