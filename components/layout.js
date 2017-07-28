import {Component} from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import Footer from './footer'
import NProgess from "./nprogress";

import Analytics from '../utils/analytics'
import Router from 'next-routes'


import 'moment';
import 'moment/locale/fr'

import Head from "next/head"


class Layout extends Component {

    static defaultProps = {
        navActive : null,
    }

    static propTypes = {
        navActive: PropTypes.string, // navigation config
    }

    /**
     *
     * @type {Analytics}
     */
    analytics = null;


    componentDidMount () {
        this.analytics = new Analytics();
        this.analytics.logPageView()


        Router.onRouteChangeComplete = () => this.analytics.logPageView()
    }

    componentWillUnmount () {

        Router.onRouteChangeComplete = null
    }

    render() {
        const {navActive, children, title, subtitle} = this.props

        const headerProps = {
            navigation: {activeItem: navActive}
        }

        return (
            <div>
                <NProgess/>
                <Head>
                    <title>{title ? title : "Giboow"}{subtitle?" - "+subtitle:null}</title>
                </Head>
                <Header {...headerProps} />
                {children}
                <Footer />
            </div>
        )
    }
}

export default Layout
