import React, { Component } from 'react';
import styled from 'styled-components';

import Cookies from 'universal-cookie';

const cookies = new Cookies();

const ScMeals = styled.div`
    text-align: center;
`;

const ScMealBox = styled.div`
`;


class Meals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pendingMeals: cookies.get('persisted_data').pending_meals
        };
    }
    
    render() {
        return (
            <ScMeals>
                {this.state.pendingMeals}
            </ScMeals>
        );
    }
}

export default Meals;
