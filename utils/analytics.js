import React from 'react'
import ReactGA from 'react-ga'


const debug = process.env.NODE_ENV !== 'production';

/**
 * Instance for singleton
 * @type GA
 */
let instance = null

export default  class GA {

    constructor() {
        if(!instance){
            instance = this;
        }
        this.initGA();

        return instance;
    }

    initGA() {
        let gaOptions = null;
        if(debug) {
            //gaOptions = {cookieDomain : 'none'};
        }
        ReactGA.initialize('UA-103397810-1', {debug, gaOptions})
    }

    logPageView() {
        ReactGA.set({ page: window.location.pathname })
        ReactGA.pageview(window.location.pathname)
    }

    logEvent(category = '', action = '') {
        if (category && action) {
            ReactGA.event({category, action})
        }
    }

    logException (description = '', fatal = false) {
        if (description) {
            ReactGA.exception({description, fatal})
        }
    }
}

