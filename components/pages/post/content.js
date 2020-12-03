import {Component} from 'react';
import PropTypes from 'prop-types';
import './content.css';

export default class Content extends Component {

    static propType = {
        contentHtml: PropTypes.string.isRequired
    };

    render() {
        const {contentHtml} = this.props;
        return (
            <section className="section">
                <div className="content" dangerouslySetInnerHTML={{__html: contentHtml}}/>
            </section>
        );
    }
}