import {Component} from 'react';
import PropTypes from 'prop-types';
import Title from "./title";
import Content from "./content";
import Breadcrumb from "./breadcrumb";
import moment from "moment";

/**
 * Display post content
 */
export default class PostContent extends Component {

    postData = null;

    static propTypes = {
        postData: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            contentHtml: PropTypes.string.isRequired,
        })
    };

    constructor(props, context) {
        super(props, context);
        this.postData = props.postData;
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="section">
                        <article>
                            <div className="article__header mt-1">
                                <figure className="article__image image">
                                    <img src={this.postData.image} alt={this.postData.title}/>
                                </figure>
                                <h1 className="article__title is-size-2 is-size-3-mobile m-2">{this.postData.title}</h1>
                            </div>
                            <div className="article__meta mb-5">
                            <span>
                                <span className="icon has-text-primary">
                                    <i className="fa fa-calendar"/>
                                </span>
                                <time className="is-left" dateTime={moment.utc(this.postData.date).format()}>
                                {moment(this.postData.date).format('LL')}
                                </time>
                            </span>
                                <span className="ml-3">
                            <span className="icon has-text-primary">
                                <i className="fa fa-clock"/>
                            </span>
                            <span>{this.postData.readingTime} minutes</span>
                        </span>
                            </div>
                            <div className="article__content">
                                <Content {...this.postData} />
                            </div>
                        </article>
                    </div>
                </div>
                <style jsx>{`
                    .article__header {
                        height: 200px;
                        position: relative;
                    }
                   
                    .article__title {
                        position: absolute;
                        bottom: 0;
                    }
                    .article__image img{
                         height: 200px;
                         position: absolute;
                         object-fit: cover;
                         object-position: center center;
                         width: 100%;
                         opacity: 0.2;
                    }
                `}</style>
            </>
        )
    }
}

