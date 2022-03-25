import {Component} from 'react';
import PropTypes from 'prop-types';

export default class Content extends Component {

    static propType = {
        contentHtml: PropTypes.string.isRequired
    };

    render() {
        const {contentHtml} = this.props;
        return (
                <div className="content" dangerouslySetInnerHTML={{__html: contentHtml}}/>
        );
    }
}
