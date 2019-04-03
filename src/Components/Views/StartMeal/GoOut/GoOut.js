import React, { Component } from 'react';
import styled from 'styled-components';

import ScStartMeal from './Shared.js'
import ScMealType from './Shared.js'

const ScGoOut = styled.div`
    text-align: center;
`;


class GoOut extends Component {
    render() {
        return (
            <ScGoOut>
                We want to go out!
            </ScGoOut>
        );
    }
}

export default GoOut;
