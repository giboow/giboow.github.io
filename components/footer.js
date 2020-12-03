import {Component} from 'react'
import Link from 'next/link'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faGithub, faWeixin, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";


export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-offset-1-desktop is-4 is-6-mobile">
              <div className="content is-large">
                <div className="columns is-mobile">
                  <div className="column">
                    <a title="Twitter" className="icon" href="https://twitter.com/giboow">
                      <FontAwesomeIcon icon={faTwitter}  />
                    </a>
                  </div>
                  <div className="column">
                    <a title="LinkedIn" className="icon"
                       href="https://www.linkedin.com/in/pgibert/">
                      <FontAwesomeIcon icon={faLinkedin}  />
                    </a>
                  </div>
                  <div className="column">
                    <a title="Github" className="icon" target="_blank"
                       href="https://github.com/giboow/">
                      <FontAwesomeIcon icon={faGithub}  />
                    </a>
                  </div>
                  <div className="column">
                    <Link href="/contact">
                      <a title="Contactez moi" className="icon">
                        <FontAwesomeIcon icon={faWeixin}  />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-offset-4-desktop is-4-desktop">
              <div className="content is-small">
                &copy; {moment().format('YYYY')} -
                Made with ♥ By <a href="https://twitter.com/giboow">Giboow</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
