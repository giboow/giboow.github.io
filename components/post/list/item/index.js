import style from './item.scss';
import moment from "moment";

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
    <p className="title">{post.title}</p>
  </article>
);