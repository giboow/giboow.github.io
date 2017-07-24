import React from 'react'
import moment from 'moment'

import AboutContentEducation from './education'
import AboutContentCareer from './career'
import Separator from './separator'
import Marker from './utils/marker'

const AboutContent = () => (
  <div>
    <section className="hero is-medium has-text-centered is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1">Philippe Gibert</h1>
          <Marker city="Bain de Bretagne, Ille-et-Vilaine, France"/>

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
        <Separator title="Experiences"/>
        <AboutContentEducation/>
        <Separator/>
        <AboutContentCareer/>
      </div>
    </section>
  </div>
)

export default AboutContent