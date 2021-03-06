import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Banner from '../Banner/Banner.jsx';

import './content.sass';

class Content extends Component {
    render () {
        let { visible } = this.props;
        let isVisibleClass = visible ? '-active' : '';

        return (
            <div id="content" className={`content ${isVisibleClass}`}>
                <Banner />
                <div className="content--text">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        );
    }
}

Content.propTypes = {
    visible: PropTypes.bool.isRequired
};

export default Content;