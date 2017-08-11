import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Menu from '../Menu/Menu.jsx';

import './header.sass';

class Header extends Component {
    render () {
        let { visible, onClickHandler } = this.props;
        let isVisibleClass = visible ? '-active' : '';

        return (
            <div
                id="header"
                className={`header ${isVisibleClass}`}>

                <button
                    className="menu--button"
                    onClick={() => { onClickHandler() }}>
                        MENU
                </button>

                <Menu { ...this.props } />
            </div>
        );
    }
}

Header.propTypes = {
    visible: PropTypes.bool.isRequired,
    items: PropTypes.array.isRequired,
    onClickHandler: PropTypes.func.isRequired
};

export default Header;