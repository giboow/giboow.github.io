import {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import style from './title.scss';

export default class Title extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
    };


    constructor(props, context) {
        super(props, context);
    }

    render() {
        const post = this.props;
        return (

            <section className="hero is-secondary hero-background has-background is-blogpost">
                {post.image && <img className="hero-background is-transparent" src={post.image}/>}
                <div className="hero-body">
                    <div className="container">
                        <div className="title">
                            {post.title}
                        </div>
                        <div className="metadata">
                            <div className="image is-24x24 is-pulled-left mr-2">
                                <img src={"https://github.com/" + post.author + ".png?size=28"}
                                     className="is-rounded" alt="author"/>
                            </div>
                            <time className="is-left" dateTime={moment.utc(post.date).format()}>
                                {moment(post.date).format('LL')}
                            </time>
                        </div>
                    </div>
                </div>
            </section>


        )
    }


}