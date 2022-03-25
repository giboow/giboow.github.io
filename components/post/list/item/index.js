import style from '../../../../styles/post-item.module.scss';
import React from "react";
import * as classnames from "classnames";
import LinkTitle from "../../../pages/post/linkTitle";
import Link from 'next/link'
import moment from "moment";

const PostListItem = ({post}) => (

    <div className="is-flex-grow-1 is-flex-direction-column" style={{height: "100%"}}>
        <article className="postItem is-flex is-flex-direction-column" style={{height: "100%"}}>
            <p className="postItem__meta">
                <span>
                    <span className="icon has-text-primary">
                        <i className="fa fa-calendar"/>
                    </span>
                    <time className="is-left" dateTime={moment.utc(post.date).format()}>
                        {moment(post.date).format('LL')}
                    </time>
                </span>
                <span className="ml-3">
                    <span className="icon has-text-primary">
                        <i className="fa fa-clock"/>
                    </span>
                    <span>{post.readingTime} minutes</span>
                </span>
                {/*<span className="postItem__meta__author">{post.author}</span>*/}
            </p>
            <figure className="postItem__image image is-16by9">
                <img className="hero-background is-transparent" src={post.image}/>
            </figure>
            <Link href={"/posts/" + post.id}>
                <a className="postItem__titleLink is-flex is-flex-direction-column is-flex-grow-1 is-primary has-text-black">
                    {post.title}
                </a>
            </Link>
            <div className="buttons my-5">
                <Link href={"/posts/" + post.id}>
                    <a className="button is-primary is-small is-block has-icons-right">
                    <span>
                    Voir plus
                    </span>
                        <span className="icon is-small">
                        <i className="fa fa-chevron-right"></i>
                    </span>
                    </a>
                </Link>
            </div>
        </article>
    </div>
);

export default PostListItem;
