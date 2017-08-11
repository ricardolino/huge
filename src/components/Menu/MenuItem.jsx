import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MenuItem extends Component {
    render () {
        let { item, onClick, visible } = this.props;
        let { label, url } = item;
        let isVisibleClass = (visible === label) ? '-active' : '';

        return (
            <a
                className={`menu--item ${isVisibleClass}`}
                href={ url }
                onClick={ onClick }>{ label }</a>
        );
    }
}

MenuItem.propTypes = {
    item: PropTypes.object.isRequired,
    visible: PropTypes.string,
    onClick: PropTypes.func
};

export default MenuItem;