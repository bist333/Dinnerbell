import React, { Component } from 'react';
import styled from 'styled-components';

import Cookies from 'universal-cookie';

const cookies = new Cookies();

const ScPayments = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

const ScPaymentBox = styled.ul`
    text-align: center;
    margin-top: 2px;
    margin-bottom: 10px;
    box-shadow: 5px 5px #00000044;
    padding: 1%;
    width: 40%;
    color: #000000B5;
    height 100px;
    cursor: pointer;
    background-color: #F0F0F0;
    font-size: 18px;
    font-weight: bold;
    border-radius: 10px;
`;


class Payments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pendingPayments: cookies.get('persisted_data').pending_payments
        };
    }

    render() {
        return (
            <ScPayments>
                {this.state.pendingPayments.map(meal => (
                    <ScPaymentBox>
                        {meal.meal}<br />
                        ${meal.owed}<br />
                        {meal.time}
                    </ScPaymentBox>
                ))}
            </ScPayments>
        );
    }
}

export default Payments;
