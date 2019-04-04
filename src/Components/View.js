import React, { Component } from 'react';
import styled from 'styled-components';

import Payments from './Views/Payments/Payments';
import Meals from './Views/Meals/Meals';
import Peeps from './Views/Peeps/Peeps';
import Profile from './Views/Profile/Profile';
import Home from './Views/Home/Home';

import VIEWSTATES from '../Common/viewStates';
import PEEPSSTATES from "../Common/peepsStates";
import StartMealView from "./Views/StartMeal/StartMealView";

const ScApp = styled.div`
    text-align: center;
`;

class View extends Component {

    renderView() {
        switch (this.props.viewState) {
            case VIEWSTATES.PAYMENTS:
                return <Payments/>;
            case VIEWSTATES.MEALS:
                return <Meals/>;
            case VIEWSTATES.PEEPS:
                return <Peeps flavor={this.props.flavor} updateView={this.props.updateView}/>;
            case VIEWSTATES.PROFILE:
                return <Profile/>;
            case VIEWSTATES.STARTMEAL:
                return <StartMealView/>;
            default:
                return <Home updateView={this.props.updateView}/>;
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
