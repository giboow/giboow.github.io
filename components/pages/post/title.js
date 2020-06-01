import {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export default class Title extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired
  };


  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {title, date} = this.props;
    const momentDate = moment(date);

    return (

      <section className="hero is-info">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1">{title}</h1>
            <p className="subtitle is-4">{momentDate.format('LL')}</p>
          </div>
        </div>
      </section>
    )
  }


}