import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './menu.sass';

import SubMenu from './SubMenu.jsx';
import MenuItem from './MenuItem.jsx';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: ''
        }
    }

    onClickHandler (event) {
        let newElement = event;

        if (event === this.state.visible) {
            newElement = '';
        }

        this.setState({
            visible: newElement
        })
    }

    renderSubmenu (item, index) {
        let { label } = item;
        let { visible } = this.state;

        return (
            <SubMenu
                key={index}
                item={item}
                visible={visible}
                onClick={() => {this.onClickHandler(label)}} />
        );
    }

    renderMenuItem (item, index) {
        let { label } = item;
        let { visible } = this.state;

        return (
            <MenuItem
                key={index}
                item={item}
                visible={visible}
                onClick={() => {this.onClickHandler(label)}} />
        );
    }

    handleRenders (items) {
        if (!items) {
            return null;
        }

        return items.map((item, index) => {
            let hasItems = item.items.length > 0;

            if (hasItems) {
                return this.renderSubmenu(item, index);
            }

            return this.renderMenuItem(item, index);
        })
    }

    render () {
        let { items, visible } = this.props;
        let isVisibleClass = visible ? '-active' : '';

        return (
            <nav
                id="menu"
                className={ `menu ${isVisibleClass}` }>
                { this.handleRenders(items) }
            </nav>
        );
    }
}

Menu.propTypes = {
    items: PropTypes.array.isRequired,
    visible: PropTypes.bool.isRequired,
    onClickHandler: PropTypes.func.isRequired
};

export default Menu;