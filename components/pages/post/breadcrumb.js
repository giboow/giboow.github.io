import Link from "next/link";

export default ({title}) => (
  <nav className="breadcrumb" aria-label="breadcrumbs">
    <ul>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/blog">Blog</Link></li>
      <li className="is-active"><a href="#">{title}</a></li>
    </ul>
  </nav>
);