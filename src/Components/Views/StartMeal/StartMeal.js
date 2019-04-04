import React, { Component } from 'react';

import {ScStartMeal, ScMealType} from './Shared';


class StartMeal extends Component {
    render() {
        return (
            <ScStartMeal>
                <ScMealType onClick={() => this.props.updateView(this.props.viewState, this.props.flavor)}>
                    I&apos;m Cooking
                </ScMealType>
                <ScMealType onClick={() => this.props.updateView(this.props.viewState, this.props.flavor)}>
                    We&apos;re Ordering
                </ScMealType>
                <ScMealType onClick={() => this.props.updateView(this.props.viewState, this.props.flavor)}>
                    We&apos;re Going Out
                </ScMealType>
            </ScStartMeal>
        );
    }
}

export default StartMeal;
