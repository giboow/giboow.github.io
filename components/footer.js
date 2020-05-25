import {Component} from 'react'
import Link from 'next/link'
import moment from 'moment'

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
                      <i className="fa fa-twitter"></i>
                    </a>
                  </div>
                  <div className="column">
                    <a title="LinkedIn" className="icon"
                       href="https://www.linkedin.com/in/pgibert/">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </div>
                  <div className="column">
                    <a title="Github" className="icon" target="_blank"
                       href="https://github.com/giboow/">
                      <i className="fa fa-github"></i>
                    </a>
                  </div>
                  <div className="column">
                    <Link href="/contact">
                      <a title="Contactez moi" className="icon">
                        <i className="fa fa-weixin"></i>
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
