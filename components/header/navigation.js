import {Component} from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

import classname from 'classnames'


class Navigation extends Component {
  static defaultProps = {
    isMobile: false,
    activeItem: null,
    className: null
  }

  static propTypes = {
    isMobile: PropTypes.bool,
    activeItem: PropTypes.string,
    className: PropTypes.string,
  }

  navItems = [
    {id: 'home', name: 'Home', href: '/'},
   // {id: 'about', name: 'About', href: '/about'},
  ]


  render() {

    const {isMobile, activeItem, className} = this.props

    const defaultClassName = {
      'navbar-item': true,
      'is-tab': true,
      'is-hidden-mobile': !isMobile,
      'is-hidden-tablet': isMobile
    }


    return (
      <div className={className}>
        { this.navItems.map((item, key) => {
          let isActive = activeItem == item.id
          return (
            <Link key={key} href={item.href}>
              <a
                className={classname(defaultClassName, {'is-active': isActive})}>{item.name}</a>
            </Link>
          )
        })}
      </div>
    )
  }
}

export default Navigation
