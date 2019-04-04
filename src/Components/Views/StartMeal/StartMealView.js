import React, { Component } from 'react';

import StartMeal from "./StartMeal";
import Delivery from './Delivery/Delivery.js';
import GoOut from './GoOut/GoOut.js';
import HomeCooked from './HomeCooked/HomeCooked.js';
import VIEWSTATES from "../../../Common/viewStates";

class StartMealView extends Component {
    constructor(props){
        super(props);

        this.state={};

        this.updateView = this.updateView.bind(this);
    };

    updateView(newView) {
        this.setState({viewState: newView});
    }

    render() {
        switch (this.state.viewState) {
            case VIEWSTATES.DELIVERY:
                return <Delivery name={VIEWSTATES.DELIVERY} />;
            case VIEWSTATES.GOOUT:
                return <GoOut name={VIEWSTATES.GOOUT} viewState={VIEWSTATES.GOOUT} updateView={this.props.updateView} />;
            case VIEWSTATES.HOMECOOKED:
                return <HomeCooked name={VIEWSTATES.HOMECOOKED} viewState={VIEWSTATES.HOMECOOKED} updateView={this.props.updateView} />;
            default:
                return <StartMeal updateView={this.updateView}/>;
        }
    }
}

export default StartMealView;