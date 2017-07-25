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
                            (
                            <strong>CakePHP</strong>,
                            <strong>MySQL</strong>,
                            <strong>MongoDB</strong>,
                            <strong>ElasticSearch</strong>,
                            <strong>Docker</strong>, <strong>jQuery</strong>
                            )
                        </li>
                        <li>
                            Création d’applications mobiles IOS/Android (
                            <strong>Ionic2</strong>,
                            <strong>TypeScript</strong>,
                            <strong>Angular2</strong>
                            )
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
                <strong className="title is-4">StartingPlex / HotAlert</strong>
                <p>Juillet 2014 à Octobre 2015</p>
            </div>
            <div className="column is-8">
                <strong className="title is-4">Développeur FullStack</strong>
                <div classname="content">
                    <ul>
                        <li>
                            Travail sur 2 projets :
                            <ul>
                                <li>http://docforyou.com : Analyseur de symptômes médicaux.</li>
                                <li>http://hotalert.com : Application mobile d’alertes géolocalisées.</li>
                            </ul>
                        </li>
                        <li>
                            Mise en place d’une architecture de développement à base de containers Docker. Installation et
                            maintenance de serveurs LEMP.
                        </li>
                        <li>
                            Développement d’API, interface applicative pour les différentes applications Front-end
                            Android, iOs et Web (
                            <strong>PHP</strong>,
                            <strong>Framework Laravel 4 et 5</strong>,
                            <strong>RabbitMQ</strong>,
                            <strong>MongoDb</strong>,
                            <strong>AngularJS</strong>
                            ).
                        </li>
                        <li>
                            Recherche et développement sur des technologies Java (
                            <strong>Scala</strong>,
                            <strong>Groovy</strong>
                            ).
                        </li>
                    </ul>
                </div>
                <strong>
                    <Marker city="Vannes" link="http://hotalert.com"/>
                </strong>
            </div>
        </div>
    </div>
)