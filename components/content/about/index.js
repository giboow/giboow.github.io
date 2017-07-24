import React from 'react'
import moment from 'moment'

const AboutContent = () => (
    <div>
        <section className="hero is-medium has-text-centered is-primary">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title is-1">Philippe Gibert</h1>
                </div>
            </div>
        </section>
        <section className="section">
            <div className="container">
                <div className="columns">
                    <div className="column is-offset-1 is-10 has-text-centered">
                        <h2 className="title is-2">Profil</h2>
                        <h3 className="subtitle is-3">Développeur JS & PHP</h3>
                        <hr/>
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-4 is-offset-1 has-text-left">
                        <h3 className="title is-3">A propos de moi </h3>
                        <p>Bla bla blla bla bla</p>
                    </div>
                    <div className="column is-2 has-text-centered">
                        <figure className="image is-1by1">
                            <img src="http://fakeimg.pl/512x512/"/>
                        </figure>
                    </div>
                    <div className="column is-offset-2 has-text-left">
                        <h3 className="title is-3">Details</h3>
                        <p>
                            <strong>Nom :</strong><br/>
                            Philippe Gibert<br/>
                            <strong>Age :</strong><br/>
                            {moment().diff('1984-12-15', 'years')} ans<br/>
                            <strong>Situation géographique :</strong><br/>
                            Rennes, Bretagne, France<br/>
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className="section" style={{backgroundColor: "grey"}}>
            <div className="container">
                <div className="columns">
                    <div className="column is-offset-1 is-10 has-text-centered">
                        <h2 className="title is-2">Experiences</h2>
                        <hr/>
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-2 is-offset-1-desktop">
                        <h3 className="title is-3">Education</h3>
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-2 is-offset-1-desktop">
                        <strong className="title is-4">Toto</strong>
                        <p>Mars 2014</p>
                    </div>
                    <div className="column is-8">
                        <strong className="title is-4">Yeah</strong>
                        <p style={{textAlign: "justify"}}>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                            consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
                            dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                            exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                            consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
                            molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                        </p>
                        <strong>
                            <i className="fa fa-map-marker"></i> Rennes
                        </strong>
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-2 is-offset-1-desktop">
                        <strong className="title is-4">Toto</strong>
                        <p>Mars 2014</p>
                    </div>
                    <div className="column is-8">
                        <strong className="title is-4">Yeah</strong>
                        <p style={{textAlign: "justify"}}>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                            consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
                            dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                            exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                            consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
                            molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                        </p>
                        <strong>
                            <i className="fa fa-map-marker"></i> Rennes
                        </strong>
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-offset-1 is-10 has-text-centered">
                        <hr/>
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-2 is-offset-1-desktop">
                        <h3 className="title is-3">Carrière</h3>
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-2 is-offset-1-desktop">
                        <strong className="title is-4">Toto</strong>
                        <p>Mars 2014</p>
                    </div>
                    <div className="column is-8">
                        <strong className="title is-4">Yeah</strong>
                        <p style={{textAlign: "justify"}}>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                            consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
                            dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                            exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                            consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
                            molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                        </p>
                        <strong>
                            <i className="fa fa-map-marker"></i> Rennes
                        </strong>
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-2 is-offset-1-desktop">
                        <strong className="title is-4">Toto</strong>
                        <p>Mars 2014</p>
                    </div>
                    <div className="column is-8">
                        <strong className="title is-4">Yeah</strong>
                        <p style={{textAlign: "justify"}}>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                            consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
                            dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                            exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                            consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
                            molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                        </p>
                        <strong>
                            <i className="fa fa-map-marker"></i> Rennes
                        </strong>
                    </div>
                </div>
            </div>
        </section>
    </div>
)

export default AboutContent