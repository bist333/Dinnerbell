import React, { Component } from 'react';
import styled from 'styled-components';


const ScMeals = styled.div`
    text-align: center;
`;


class Meals extends Component {
    render() {
        return (
            <ScMeals>
                This is a meals!!!
            </ScMeals>
        );
    }
}

export default Meals;
