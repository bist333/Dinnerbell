import React, { Component } from 'react';
import styled from 'styled-components';

import Nav from "./Components/Nav";
import Header from "./Components/Header";
import View from "./Components/View";

import VIEWSTATES from './Common/viewStates';

import Cookies from 'universal-cookie';
import persistent_data from './persist.json';

const cookies = new Cookies();
cookies.set('persisted_data', JSON.stringify(persistent_data));

const ScApp = styled.div`
    text-align: center;
`;

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {viewState: VIEWSTATES.HOME };

        this.updateView = this.updateView.bind(this);
    }


    updateView(newView) {
        this.setState({viewState: newView});
    }


    render() {
        return (
            <ScApp>
                <Nav updateView={this.updateView} />
                <Header time={1553432663} />
                <View viewState={this.state.viewState}/>
            </ScApp>
        );
    }
}

export default App;
