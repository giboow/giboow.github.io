import style from './item.scss';
import React from "react";
import * as classnames from "classnames";
import Title from "../../../pages/post/title";

const PostListItem = ({post}) => (
    <article className={classnames(style.post)}>
        <Title {...post} />
        <div className="content mt-4"
             dangerouslySetInnerHTML={{
                 __html: post.contentHtml
             }}/>
    </article>
);

export default PostListItem;
