import React from 'react'
import Marker from './utils/marker'

export default () => (
  <div>
    <div className="columns">
      <div className="column is-2 is-offset-1-desktop">
        <h3 className="title is-3">Carrière</h3>
      </div>
    </div>
    <div className="columns">
      <div className="column is-2 is-offset-1-desktop">
        <strong className="title is-4">Wizdeo</strong>
        <p>Octobre 2015 à Aujourd’hui</p>
      </div>
      <div className="column is-8">
        <strong className="title is-4">Ingénieur R&D</strong>
        <div className="content">
          <ul>
            <li>
              Développement Backend/Frontend de la plateforme Wizdeo, outil
              d’analyse d’audience sur Youtube
              (CakePHP, MySQL, MongoDB, ElasticSearch, Docker, jQuery)
            </li>
            <li>
              Création d’applications mobiles IOS/Android (Ionic2, TypeScript,
              Angular2)
            </li>
            <li>
              Methods Agiles : Scrum
            </li>
          </ul>
        </div>
        <strong>
          <Marker city="Rennes" link="http://wizdeo.com"/>
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
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
          veritatis et quasi
          architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
          voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione
          voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
          ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi
          tempora incidunt ut labore et
          dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
          veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
          ex ea commodi
          consequatur? Quis autem vel eum iure reprehenderit qui in ea
          voluptate velit esse quam nihil
          molestiae consequatur, vel illum qui dolorem eum fugiat quo
          voluptas nulla pariatur?
        </p>
        <strong>
          <i className="fa fa-map-marker"></i> Rennes
        </strong>
      </div>
    </div>
  </div>
)