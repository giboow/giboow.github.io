import { Component } from 'react';
import ReactGA from 'react-ga'
import Router from 'next-routes'

const debug = process.env.NODE_ENV !== 'production';

export default class extends Component {
    /**
     * Last tracked path memorisation
     * @type null|string
     */
    lastTrackedPath = null

    constructor (props) {
        super(props);
        this.trackPageview = this.trackPageview.bind(this);
    }

    componentDidMount() {
        this.initGa();
        this.trackPageview();
        Router.routeChangeComplete = () => this.trackPageview;
    }

    componentWillUnmount() {
        Router.routeChangeComplete = () => null;
    }

    trackPageview (path = document.location.pathname) {
        if (path !== this.lastTrackedPath) {
            ReactGA.pageview(path);
            this.lastTrackedPath = path;
        }
    }

    initGa () {
        if (!window.GA_INITIALIZED) {
            ReactGA.initialize('UA-75828878-1', { debug });
            window.GA_INITIALIZED = true;
        }
    }

    render() {
        return null
    }
}
