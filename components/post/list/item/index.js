import style from './item.scss';
import moment from "moment";
import Truncate from "react-truncate";
import Link from "next/link";

export default ({post}) => (
    <article className={style.post}>
        <div className="column is-1">
            <img src={"https://github.com/" + post.author + ".png?size=28"}
                 className="is-pulled-left"/>
        </div>
        <div className="columns">
            <time dateTime={moment.utc(post.date).format()}>
                {moment(post.date).format('LL')}
            </time>
        </div>
        <Link href={"/posts/" + post.id}>
            <a className="title">{post.title}</a>
        </Link>
        <div dangerouslySetInnerHTML={{
            __html: post.contentHtml
        }}/>
    </article>
);