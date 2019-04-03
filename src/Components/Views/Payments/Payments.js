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
    padding: 10%;
    width: 25%;
    border-style: solid;
    border-color: 2px;
    padding-bottom: 30px;
    cursor: pointer;
    background-color: #EF476F;
    font-size: 18px;
    font-weight: bold;
    color: #F8F8FF;
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
                {this.state.pendingPayments.map(meal => <ScPaymentBox><li>{meal.meal}</li><li>{meal.owed}</li><li>{meal.time}</li></ScPaymentBox>)}
            </ScPayments>
        );
    }
}

export default Payments;
