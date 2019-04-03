import React, { Component } from 'react';
import styled from 'styled-components';

import {ScStartMeal} from '../Shared.js'

const ScDelivery = styled.div`
    text-align: center;
`;


class Delivery extends Component {
    render() {
        return (
            <ScDelivery>
                We want to order delivery!
            </ScDelivery>
        );
    }
}

export default Delivery;
