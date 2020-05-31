import {Component} from "react"

import redirect from "next-redirect"
import { getSortedPostsData } from '../services/posts'
import Layout from "../components/layout";


class IndexPage extends Component{

    componentDidMount() {
        const {context} = this;
       // redirect(context, "/about")
    }

    render() {
      return (<Layout></Layout>);
    }
}

export default IndexPage

