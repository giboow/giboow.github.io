import style from '../../../../styles/post-item.module.scss';
import React from "react";
import * as classnames from "classnames";
import LinkTitle from "../../../pages/post/linkTitle";

const PostListItem = ({post}) => (
    <article>
        <LinkTitle {...post} />
        <div className={classnames(style.post, "content mt-4")}
             dangerouslySetInnerHTML={{
                 __html: post.contentHtml
             }}/>
    </article>
);

export default PostListItem;
