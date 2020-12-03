import * as style from './breadcrumb.scss'
import Link from "next/link";

const Breadcrumb = ({title}) => (
  <nav className="breadcrumb is-hidden-touch" aria-label="breadcrumbs">
    <ul>
      <li><Link href="/">Accueil</Link></li>
      <li><Link href="/posts">Posts</Link></li>
      <li className="is-active"><a href="#">{title}</a></li>
    </ul>
  </nav>
);

export default Breadcrumb;