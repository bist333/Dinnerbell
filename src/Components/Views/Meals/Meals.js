import React, { Component } from 'react';
import styled from 'styled-components';

import Cookies from 'universal-cookie';

const cookies = new Cookies();

const ScMeals = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

const ScMealBox = styled.div`
    text-align: center;
    padding: 5%;
    width: 25%;
    height 30px;
    border-style: solid;
    border-color: 2px;
    cursor: pointer;
    background-color: #EF476F;
    font-size: 18px;
    font-weight: bold;
    color: #F8F8FF;
    border-radius: 10px;
`;

const ScAcceptButton = styled.button`
    background-color: #4CAF50;
    width: 10%;
    height: 10%;
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
                {this.state.pendingMeals.map(meal => <ScMealBox>{meal.meal}<br />{meal.type}<br />{meal.time}<br /><ScAcceptButton></ScAcceptButton></ScMealBox>)}
            </ScMeals>
        );
    }
}

export default Meals;
