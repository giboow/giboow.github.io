import React from 'react'
import moment from 'moment'

import Marker from './utils/marker'

export default () => (
    <section className="section">
        <div className="container">
            <div className="columns">
                <div className="column is-offset-1 is-10 has-text-centered">
                    <h2 className="title is-2">Profil</h2>
                    <hr/>
                </div>
            </div>
            <div className="columns">
                <div className="column is-3 is-offset-1 has-text-left">
                    <h3 className="title is-3">A propos de moi </h3>
                    <div className="content">
                        <p>
                            Développeur Web passionné depuis plus de 10 ans, j'ai une bonne connaissance des techniques back-end et front-end.
                            J'aime faire une veille constante sur l'ecosysteme web et découvrir de nouvelles technologies.
                            Passionné d'internet, de jeux de sociétés et de tout ce qui tourne autour de l'univers geek et high tech, je vous fais partager mes passions
                            à travers mon blog.
                        </p>
                    </div>
                </div>
                <div className="column is-2 is-offset-1 has-text-centered">
                    <figure className="image is-1by1" >
                        <img src="/static/images/giboow-portrait.jpg" style={{borderRadius:"100px"}}/>
                    </figure>
                </div>
                <div className="column is-3 is-offset-1 has-text-left">
                    <h3 className="title is-3">Details</h3>
                    <p>
                        <strong>Nom :</strong><br/>
                        Philippe Gibert<br/>
                        <strong>Age :</strong><br/>
                        {moment().diff('1984-12-15', 'years')} ans<br/>
                        <strong>Situation géographique :</strong><br/>
                        <Marker city="Bain de Bretagne, Ille-et-Vilaine, France"/>
                    </p>
                </div>
            </div>
        </div>
    </section>
)