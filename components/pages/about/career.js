import React from 'react'
import Marker from './utils/marker'

const Career = () => (
    <div>
        <div className="columns">
            <div className="column is-2 is-offset-1-desktop">
                <h3 className="title is-3">Carrière</h3>
            </div>
        </div>
        <div className="columns">
            <div className="column is-2 is-offset-1-desktop">
                <strong className="title is-4">Ekolis</strong>
                <p>Mai 2018 à Aujourd’hui</p>
            </div>
            <div className="column is-8">
                <strong className="title is-4">Développeur FullStack</strong>
                <div className="content">
                    <ul>
                        <li>
                            Développement Backend/Frontend de la plateforme Ekolis, outil
                            de suivi de flotte
                            <ul>
                                <li>Java</li>
                                <li>Angular</li>
                                <li>PostgreSQL</li>
                                <li>RabbitMQ</li>
                            </ul>

                        </li>
                        <li>
                            Création d'application Android
                            <ul>
                                <li>Android Natif Java/Kotlin</li>
                            </ul>
                        </li>
                        <li>
                            Suivi de projet externalisé
                        </li>
                        <li>
                            Support technique pour les commerciaux, technicien et client
                        </li>
                    </ul>
                </div>
                <strong>
                    <Marker city="Rennes" link="http://ekolis-eu.com"/>
                </strong>
            </div>
        </div>
        <div className="columns">
            <div className="column is-2 is-offset-1-desktop">
                <strong className="title is-4">Wizdeo</strong>
                <p>Octobre 2015 à Mai 2018</p>
            </div>
            <div className="column is-8">
                <strong className="title is-4">Ingénieur R&D</strong>
                <div className="content">
                    <ul>
                        <li>
                            Développement Backend/Frontend de la plateforme Wizdeo, outil
                            d’analyse d’audience sur Youtube
                            <ul>
                                <li>CakePHP</li>
                                <li>MySQL</li>
                                <li>MongoDB</li>
                                <li>ElasticSearch</li>
                                <li>Docker</li>
                                <li>jQuery</li>
                            </ul>
                        </li>
                        <li>
                            Création d’applications mobiles IOS/Android
                            <ul>
                                <li>Ionic2</li>
                                <li>TypeScript</li>
                                <li>Angular2</li>
                            </ul>
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
                <div className="content">
                    <ul>
                        <li>
                            Travail sur 2 projets :
                            <ul>
                                <li>http://docforyou.com : Analyseur de symptômes médicaux.</li>
                                <li>http://hotalert.com : Application mobile d’alertes géolocalisées.</li>
                            </ul>
                        </li>
                        <li>
                            Mise en place d’une architecture de développement à base de containers Docker. Installation
                            et
                            maintenance de serveurs LEMP.
                        </li>
                        <li>
                            Développement d’API, interface applicative pour les différentes applications Front-end
                            Android, iOs et Web
                            <ul>
                                <li>PHP</li>
                                <li>Framework Laravel 4 et 5</li>
                                <li>RabbitMQ</li>
                                <li>MongoDb</li>
                                <li>AngularJS</li>
                            </ul>
                        </li>
                        <li>
                            Recherche et développement sur des technologies Java
                            <li>Scala</li>
                            <li>Groovy</li>

                        </li>
                    </ul>
                </div>
                <strong>
                    <Marker city="Vannes" link="http://hotalert.com"/>
                </strong>
            </div>
        </div>
        <div className="columns">
            <div className="column is-2 is-offset-1-desktop">
                <strong className="title is-4">Advert Stream</strong>
                <p>Juin 2009 à Juillet 2014</p>
            </div>
            <div className="column is-8">
                <strong className="title is-4">Ingénieur R&D</strong>
                <div className="content">
                    <ul>
                        <li>
                            Mise en place d’une architecture de développement : Configuration apache, installation d’un
                            serveur de
                            version (<strong>Subversion</strong>) et d’intégration
                            (<strong>Jenkins</strong>, <strong>PHPUnit</strong>).
                        </li>
                        <li>
                            Analyse et conception de la nouvelle version de la plateforme publicitaire
                            (<strong>PHP</strong>, <strong>Zend Framework</strong>, <strong>Jquery</strong>, Site
                            multilingue).
                        </li>
                        <li>
                            Développement du nouveau moteur de diffusion de publicité, avec des problématiques de fort
                            trafic : Optimisation MySQL, architecture réseau spécifique
                        </li>
                        <li>
                            Architecture logicielle avancée, applications multi-serveurs à haute disponibilité
                        </li>
                        <li>
                            Application Temps réel : Consultation des logs multi-servers (<strong>NodeJS</strong>)
                        </li>
                        <li>
                            Maintenance des différents systèmes de la structure (astreinte 24h/24, une semaine sur
                            trois).
                        </li>
                        <li>
                            Télétravail pendant 2 ans
                        </li>
                    </ul>
                </div>
                <strong>
                    <Marker city="Lyon" link="http://www.advertstream.com/"/>
                </strong>
            </div>
        </div>
    </div>
);

export default Career;
