import React, { Component } from 'react';
import styled from 'styled-components';

import Delivery from './Delivery/Delivery.js';
import GoOut from './GoOut/GoOut.js';
import HomeCooked from './HomeCooked/HomeCooked.js';

import VIEWSTATES from '../../../Common/';
import StartMeal from "./StartMeal";

const ScApp = styled.div`
    text-align: center;
`;

class View extends Component {

    renderView() {
        switch (this.props.viewState) {
            case VIEWSTATES.DELIVERY:
                return <Delivery/>;
            case VIEWSTATES.GOOUT:
                return <GoOut/>
            case VIEWSTATES.HOMECOOKED:
                return <HomeCooked/>
            default:
                return <StartMeal/>;
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