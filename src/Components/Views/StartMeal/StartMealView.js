import React, { Component } from 'react';
import styled from 'styled-components';

import StartMeal from "./StartMeal";
import Delivery from './Delivery/Delivery.js';
import GoOut from './GoOut/GoOut.js';
import HomeCooked from './HomeCooked/HomeCooked.js';
import VIEWSTATES from "../../../Common/viewStates";


const ScApp = styled.div`
    text-align: center;
`;

class StartMealView extends Component {

    renderView() {
        switch (this.props.viewState) {
            case VIEWSTATES.DELIVERY:
                return <Delivery name={VIEWSTATES.DELIVERY} viewState={VIEWSTATES.DELIVERY} updateView={this.props.updateView} />;
            case VIEWSTATES.GOOUT:
                return <GoOut name={VIEWSTATES.GOOUT} viewState={VIEWSTATES.GOOUT} updateView={this.props.updateView} />;
            case VIEWSTATES.HOMECOOKED:
                return <HomeCooked name={VIEWSTATES.HOMECOOKED} viewState={VIEWSTATES.HOMECOOKED} updateView={this.props.updateView} />;
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

export default StartMealView;