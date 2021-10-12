import {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Link from "next/link";

//import style from './title.scss';
import Title from "./title";

export default class LinkTitle extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const post = this.props;
        return (
            <Link href={"/posts/" + post.id}>
                <a>
                    <Title {...post} />
                </a>
            </Link>

        )
    }


}
