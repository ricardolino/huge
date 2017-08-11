import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MenuItem from './MenuItem.jsx';

class SubMenu extends Component {
    renderMenuItems (items) {
        if (!items) {
            return null;
        }

        return items.map((item, index) => {
            return <MenuItem key={index} item={item} />
        })
    }

    render () {
        let { item, visible, onClick } = this.props;
        let { label } = item;
        let navId = `submenu-${label.toLowerCase()}`;
        let isVisibleClass = visible === label ? ' -active' : '';

        return (
            <div
                className={`menu--item -submenu ${isVisibleClass}`}
                onClick={onClick}>
                { item.label }
                <nav id={navId} className="submenu--list">
                    { this.renderMenuItems(item.items) }
                </nav>
            </div>
        );
    }
}

SubMenu.propTypes = {
    item: PropTypes.object.isRequired,
    visible: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default SubMenu;