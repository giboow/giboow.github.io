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
                            <strong>CakePHP</strong>,&nbsp;
                            <strong>MySQL</strong>,&nbsp;
                            <strong>MongoDB</strong>,&nbsp;
                            <strong>ElasticSearch</strong>,&nbsp;
                            <strong>Docker</strong>, <strong>jQuery</strong>
                            )
                        </li>
                        <li>
                            Création d’applications mobiles IOS/Android (
                            <strong>Ionic2</strong>,&nbsp;
                            <strong>TypeScript</strong>,&nbsp;
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
                            Android, iOs et Web (
                            <strong>PHP</strong>,&nbsp;
                            <strong>Framework Laravel 4 et 5</strong>,&nbsp;
                            <strong>RabbitMQ</strong>,&nbsp;
                            <strong>MongoDb</strong>,&nbsp;
                            <strong>AngularJS</strong>
                            ).
                        </li>
                        <li>
                            Recherche et développement sur des technologies Java (
                            <strong>Scala</strong>,&nbsp;
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
                            version (<strong>Subversion</strong>) et d’intégration (<strong>Jenkins</strong>, <strong>PHPUnit</strong>).
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
                            Maintenance des différents systèmes de la structure (astreinte 24h/24, une semaine sur trois).
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
)