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
        {id: 'accueil', name: 'Accueil', href: '/'},
        // {id: 'posts', name: 'Posts', href: '/posts'},
        {id: 'about', name: 'A propos', href: '/a-propos'},
    ];


    render() {

        const {isMobile, activeItem, className} = this.props

        const defaultClassName = {
            'navbar-item': true,
            'is-tab': true,
            'is-hidden-mobile': !isMobile,
            'is-hidden-tablet': isMobile,
        }


        return (
            <div className={className}>
                {this.navItems.map((item, key) => {
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
