import React, { Component } from 'react';
import styled from 'styled-components';

import ScStartMeal from './Shared.js'
import ScMealType from './Shared.js'


const ScHomeCooked = styled.div`
    text-align: center;
`;


class HomeCooked extends Component {
    render() {
        return (
            <ScStartMeal>
                We want a home cooked meal!
            </ScHomeCooked>
        );
    }
}

export default HomeCooked;
