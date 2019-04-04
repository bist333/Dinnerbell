import React, { Component } from 'react';

import {ScStartMeal, ScMealType} from './Shared';
import VIEWSTATES from "../../../Common/viewStates";


class StartMeal extends Component {

    render() {
        return (
            <ScStartMeal>
                <ScMealType onClick={() => this.props.updateView(VIEWSTATES.HOMECOOKED)}>
                    I&apos;m Cooking
                </ScMealType>
                <ScMealType onClick={() => this.props.updateView(VIEWSTATES.DELIVERY)}>
                    We&apos;re Ordering
                </ScMealType>
                <ScMealType onClick={() => this.props.updateView(VIEWSTATES.GOOUT)}>
                    We&apos;re Going Out
                </ScMealType>
            </ScStartMeal>
        );
    }
}

export default StartMeal;
