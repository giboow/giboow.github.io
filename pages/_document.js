import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
    static getInitialProps ({ renderPage }) {
        const {html, head, errorHtml, chunks} = renderPage()
        const styles = flush()
        return { html, head, errorHtml, chunks, styles }
    }

    render () {
        return (
            <html>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.3/css/bulma.min.css" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
                <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
            </Head>
            <body className="custom_class">
                {this.props.customValue}
                <Main />
                <NextScript />
            </body>
            </html>
        )
    }
}
