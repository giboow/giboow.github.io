import {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Link from 'next/link'


import Navigation from './navigation'


class Header extends Component {

  static defaultProps = {
    navigation: {}
  }

  static propTypes = {
    navigation: PropTypes.object //navigation config
  }

  state = {
    activeToggleNav: false
  }

  constructor(props) {
    super(props);
    this.toggleNavMenu = this.toggleNavMenu.bind(this)
  }

  toggleNavMenu() {
    this.setState(prevState => ({
      activeToggleNav: !prevState.activeToggleNav
    }))
  }

  render() {
    const {navigation} = this.props

    return (
      <nav className="navbar is-boxed">
        <div className="navbar-brand">
          <Link href="/">
            <a className="navbar-item "
               style={{
                 fontFamily: 'Roboto',
                 fontWeight: 'bold',
                 fontSize: '1.5em',
                 color: 'cadetblue'
               }}>
              GiBoOw
            </a>
          </Link>
          <div
            className={classnames('navbar-burger', 'burger', {'is-active': this.state.activeToggleNav})}
            onClick={this.toggleNavMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <Navigation {...navigation} className="navbar-start"/>



        <Navigation {...navigation}
                    isMobile
                    className={classnames('navbar-end', 'navbar-menu', {'is-active': this.state.activeToggleNav})}
        />
      </nav>
    )
  }
}

export default Header
