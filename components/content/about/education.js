import React from 'react'

import Marker from './utils/marker'

const AboutContentEducation = () => (
  <div>
    <div className="columns">
      <div className="column is-2 is-offset-1-desktop">
        <h3 className="title is-3">Formation</h3>
      </div>
    </div>
    <div className="columns">
      <div className="column is-2 is-offset-1-desktop">
        <p>2006-2009</p>
      </div>
      <div className="column is-8">
        <strong className="title is-4">
          Diplôme d’Ingénieur Informatique
        </strong>
        <p style={{textAlign: "justify"}}>
        </p>
        <strong>
          <Marker city="Ecole Nationale d’Ingénieur de Brest, Plouzané"
                  link="https://www.enib.fr"/>
        </strong>
      </div>
    </div>
    <div className="columns">
      <div className="column is-2 is-offset-1-desktop">
        <p>2005-2006</p>
      </div>
      <div className="column is-8">
        <strong className="title is-4">
          Licence Professionnelle Conception
          et Administration de Systèmes
          d’Informations
        </strong>
        <p style={{textAlign: "justify"}}>

        </p>
        <strong>
          <Marker city="IUT de Valence, Valence"
                  link="http://www.iut-valence.fr/"/>
        </strong>
      </div>
    </div>
    <div className="columns">
      <div className="column is-2 is-offset-1-desktop">
        <p>2003-2005</p>
      </div>
      <div className="column is-8">
        <strong className="title is-4">
          DUT Informatique option Systèmes Industriels
        </strong>
        <p style={{textAlign: "justify"}}>

        </p>
        <strong>
          <Marker city="IUT de Valence, Valence"
                  link="http://www.iut-valence.fr/"/>
        </strong>
      </div>
    </div>
  </div>
)

export default AboutContentEducation