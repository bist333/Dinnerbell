import React, { Component } from 'react';
import styled from 'styled-components';

import Payments from './Views/Payments/Payments';
import Meals from './Views/Meals/Meals';
import Peeps from './Views/Peeps/Peeps';
import Profile from './Views/Profile/Profile';
import Home from './Views/Home/Home';

import VIEWSTATES from '../Common/viewStates';

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
                return <Peeps/>;
            case VIEWSTATES.PROFILE:
                return <Profile/>;
            default:
                return <Home/>;
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
