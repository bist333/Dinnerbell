import React, { Component } from 'react';
import styled from 'styled-components';

const ScMealTimer = styled.div`
    text-align: center;
`;

class MealTimer extends Component {

    constructor(props) {
        super(props);
        this.state = {time: this.props.time/60}
    }

    render() {
        return (
            <ScMealTimer>
                You have {this.state.time} minutes left until your meal
            </ScMealTimer>
        );
    }
}

export default MealTimer;
