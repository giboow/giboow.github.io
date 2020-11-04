import style from './item.scss';
import moment from "moment";
import Link from "next/link";
import React from "react";
import * as classnames from "classnames";

const PostListItem = ({post}) => (
    <article className={classnames(style.post)}>
        {post.image &&
        <div className="hero is-secondary hero-background has-background is-blogpost">
            <img className="hero-background is-transparent" src={post.image}/>
            <div className="hero-body">
                <div className="container">
                    <Link href={"/posts/" + post.id}>
                        <a className="title">{post.title}</a>
                    </Link>
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
        </div>}
        {/*<Link href={"/posts/" + post.id}>*/}
        {/*    <a className="title">{post.title}</a>*/}
        {/*</Link>*/}

        <div className="content mt-4"
             dangerouslySetInnerHTML={{
                 __html: post.contentHtml
             }}/>
    </article>
);

export default PostListItem;
