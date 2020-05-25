import Layout from "../components/layout";

export const NotFoundPage = () => (
  <Layout>
    <section className="section">
      <div className="container">
        <article className="message is-warning">
          <div className="message-body">
            404 Not Found!
          </div>
        </article>
      </div>
    </section>
  </Layout>
);

export default NotFoundPage;