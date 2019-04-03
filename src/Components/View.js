import React, { Component } from 'react';
import styled from 'styled-components';

import Meals from './Views/Meals/Meals';
import Peeps from './Views/Peeps/Peeps';
import Profile from './Views/Profile/Profile';
import StartMeal from './Views/StartMeal/StartMeal';

import VIEWSTATES from '../Common/viewStates';

const ScApp = styled.div`
    text-align: center;
`;

class View extends Component {

    renderView() {
        switch (this.props.viewState) {
            case VIEWSTATES.HOME:
                return <div>Home View</div>;
            case VIEWSTATES.MEALS:
                return <StartMeal/>;
            case VIEWSTATES.PEEPS:
                return <Peeps/>;
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
