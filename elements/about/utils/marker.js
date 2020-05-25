import {Component} from 'react'
import Link from 'next/link'

export default class Marker extends Component {

    render() {
        const {city, link} = this.props;

        return (
            <span>
                <i className="fa fa-map-marker"></i> {city}
                {link && (<span>&nbsp;|&nbsp;<a href={link}>{link}</a></span>)}
            </span>
        )
    }
}
