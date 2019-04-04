import React, { Component } from 'react';
import styled from 'styled-components';
import GrubHub from './grubhub.png';

const ScDelivery = styled.div`
    text-align: center;
    padding: 5%;
`;


class Delivery extends Component {
    render() {
        return (
            <ScDelivery>
                <a href="https://www.grubhub.com">
                    <img src={GrubHub} width="60%" height="auto" alt={'grubhub'}/>
                </a>
            </ScDelivery>
        );
    }
}

export default Delivery;
