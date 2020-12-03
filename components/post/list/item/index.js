import style from './item.scss';
import React from "react";
import * as classnames from "classnames";
import LinkTitle from "../../../pages/post/linkTitle";

const PostListItem = ({post}) => (
    <article className={classnames(style.post)}>
        <LinkTitle {...post} />
        <div className="content mt-4"
             dangerouslySetInnerHTML={{
                 __html: post.contentHtml
             }}/>
    </article>
);

export default PostListItem;
