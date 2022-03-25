import Router from 'next/router'
import NProgressLib from 'nprogress'
import {useEffect} from "react";

export default function NProgress() {


        useEffect(() => {
            Router.onRouteChangeStart = (url) => {
                NProgressLib.start()
            }

            Router.onAppUpdated = (nextRoute) => {
                NProgressLib.start()
            }

            Router.events.on('routeChangeComplete', () => NProgressLib.done());
            Router.events.on('routeChangeComplete', () =>   NProgressLib.done());
        });
        return(
            <></>
        )
}

