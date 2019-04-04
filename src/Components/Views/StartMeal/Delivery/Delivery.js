import React, { Component } from 'react';
import styled from 'styled-components';
import GrubHub from './grubhub.png';

const ScDelivery = styled.div`
    text-align: center;
`;


class Delivery extends Component {
    render() {
        return (
            <ScDelivery>
                <img src={GrubHub} width="50%" height="auto" alt={'map'}/>
            </ScDelivery>
        );
    }
}

export default Delivery;
