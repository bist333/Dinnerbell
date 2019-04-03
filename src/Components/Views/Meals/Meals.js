import React, { Component } from 'react';
import MealTimer from '../../Header/MealTimer';
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
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 2px;
    margin-bottom: 10px;
    box-shadow: 5px 5px #00000044;
    padding: 1%;
    width: 40%;
    color: #000000B5;
    height auto;
    cursor: pointer;
    background-color: #F0F0F0;
    font-size: 18px;
    font-weight: bold;
    border-radius: 10px;
`;

const ScButton = styled.button`
    background-color: ${props => props.color};
    width: auto;
    height: auto;
    
    padding: 5%;
    
    font-size: 18px;
    font-weight: bold;
    color: #00000085;
    border-style: solid;
    border-radius: 10px;
`;

const ScButtonArray = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    width: auto;
    justify-content: center;
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
                {this.state.pendingMeals.map(meal => (
                    <ScMealBox>
                        <div>{meal.meal}</div>
                        <div>{meal.type}</div>
                        <div>{meal.time}</div>
                        <ScButtonArray>
                            <ScButton color={"#4CAF50"}>
                                Accept
                            </ScButton>
                            <ScButton color={"#5F5F5F"}>
                                Change
                            </ScButton>
                            <ScButton color={"#E24329"}>
                                Decline
                            </ScButton>
                        </ScButtonArray>
                    </ScMealBox>
                ))}
            </ScMeals>
        );
    }
}

export default Meals;
