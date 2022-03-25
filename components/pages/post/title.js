import {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

//import style from './title.scss';

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
            <div class="post-item">
                <figure className="image is-16by9">
                    <img className="hero-background is-transparent" src={post.image}/>
                </figure>
                <div className="title">
                    {post.title}
                </div>
                <button className="button is-primary is-outlined is-small">
                    Voir plus
                </button>
            </div>
            // <div className="card">
            //     {post.image &&
            //         <div className="card-image">
            //
            //         </div>}
            //     <div className="card-content is-overlay">
            //         <div className="container">
            //             <div className="title">
            //                 {post.title}
            //             </div>
            //             <div className="metadata">
            //                 <div className="image is-24x24 is-pulled-left mr-2">
            //                     <img src={"https://github.com/" + post.author + ".png?size=28"}
            //                          className="is-rounded" alt="author"/>
            //                 </div>
            //                 <time className="is-left" dateTime={moment.utc(post.date).format()}>
            //                     {moment(post.date).format('LL')}
            //                 </time>
            //             </div>
            //         </div>
            //     </div>
            // </div>


        )
    }


}
