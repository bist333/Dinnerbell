import React, { Component } from 'react';
import styled from 'styled-components';

import Meals from './Views/Meals/Meals';
import Peeps from './Views/Peeps/Peeps';
import Profile from './Views/Profile/Profile';

import VIEWSTATES from '../Common/viewStates';
import PEEPSSTATES from "../Common/peepsStates";

const ScApp = styled.div`
    text-align: center;
`;

class View extends Component {

    renderView() {
        switch (this.props.viewState) {
            case VIEWSTATES.HOME:
                return <div>Home View</div>;
            case VIEWSTATES.MEALS:
                return <Meals/>;
            case VIEWSTATES.PEEPS:
                return <Peeps flavor={this.props.flavor}/>;
            case VIEWSTATES.PROFILE:
                return <Profile/>
        }
    }

    render() {
        return (
            <ScApp>
                {this.renderView()}
            </ScApp>
        );
    }
}

export default View;
