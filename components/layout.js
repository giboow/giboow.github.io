import {Component} from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import Footer from './footer'
import NProgess from "./nprogress";

import Analytics from '../services/google-analytics'
import Router from 'next/router'


import 'moment';
import 'moment/locale/fr'

import Head from "next/head"


class Layout extends Component {

  static defaultProps = {
    navActive: null,
    title: "Giboow, Philippe Gibert, Développeur Web" +
        " FullStack, Rennes, Bretagne"
  }

  static propTypes = {
    navActive: PropTypes.string,
    title: PropTypes.string// navigation config
  }

  /**
   *
   * @type {Analytics}
   */
  analytics = null;


  componentDidMount() {
    this.analytics = new Analytics();
    this.analytics.logPageView()


    Router.onRouteChangeComplete = () => this.analytics.logPageView()
  }

  componentWillUnmount() {

    Router.onRouteChangeComplete = null
  }

  render() {
    const {navActive, children, title} = this.props

    const headerProps = {
      navigation: {activeItem: navActive}
    }


    return (
      <div>
        <NProgess/>
        <Head>
          <title>{title}</title>
        </Head>
        <Header {...headerProps} />
        {children}
        <Footer />
      </div>
    )
  }
}

export default Layout
