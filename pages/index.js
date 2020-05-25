import {Component} from "react"

import redirect from "next-redirect"


class IndexPage extends Component{

    componentDidMount() {
        const {context} = this;
        redirect(context, "/about")
    }

    render() {
      return null;
    }
}

export default IndexPage

