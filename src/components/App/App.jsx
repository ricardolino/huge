import React, { Component } from 'react';
import axios from 'axios';

import 'reset-css/reset.css';
import './app.sass';

import Header from '../Header/Header.jsx';
import Banner from '../Banner/Banner.jsx';
import Content from '../Content/Content.jsx';

class App extends Component {
    constructor (props) {
        super(props);

        this.state = {
            data: {},
            visible: false
        }
    }

    onClickHandler () {
        this.setState({
            visible: !this.state.visible
        })
    }

    getDataFromApi () {
        return axios.get('/api/nav.json');
    }

    saveDataOnState (data) {
        this.setState({
            data
        })
    }

    componentDidMount () {
        this.getDataFromApi()
            .then(({ data }) => {
                this.saveDataOnState(data)
            })
    }

    render () {
        let { data, visible } = this.state;

        return (
            <div className="app">
                <Header
                    items={ data.items || [] }
                    onClickHandler={this.onClickHandler.bind(this)}
                    visible={visible} />

                <Content visible={visible} />
            </div>
        );
    }
}

export default App;