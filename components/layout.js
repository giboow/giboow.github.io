import {Component} from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import Footer from './footer'
import NProgess from "./nprogress";

import 'moment';
import 'moment/locale/fr'


class Layout extends Component {

    static defaultProps = {
        navActive : null,
    }

    static propTypes = {
        navActive: PropTypes.string, // navigation config
    }

    render() {
        const {navActive, children} = this.props

        const headerProps = {
            navigation: {activeItem: navActive}
        }

        return (
            <div>
                <NProgess/>
                <Header {...headerProps} />
                {children}
                <Footer />
            </div>
        )
    }
}

export default Layout
