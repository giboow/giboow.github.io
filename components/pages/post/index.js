import {Component} from 'react';
import PropTypes from 'prop-types';
import Title from "./title";
import Content from "./content";
import Breadcrumb from "./breadcrumb";

/**
 * Display post content
 */
export default class PostContent extends Component {

  postData = null;

  static propTypes = {
    postData: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      contentHtml: PropTypes.string.isRequired,
    })
  };

  constructor(props, context) {
    super(props, context);
    this.postData = props.postData;
  }

  render() {
    return (
      <div>
        <div className="container main-container">
          <Breadcrumb {...this.postData} />
        </div>
        <article>
          <header className="article-header">
            <Title {...this.postData} />
          </header>
          <div className="container">
            <Content {...this.postData} />
          </div>
        </article>

        <style jsx>{`
      .main-container {
        margin-top : 16px;
      }
      
      .article-header {
        margin-top: 16px;
      }
    `}</style>

      </div>
    )
  }
}

