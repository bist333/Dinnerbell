import React, { Component } from 'react';
import styled from 'styled-components';


const ScPayments = styled.div`
    text-align: center;
`;


class Payments extends Component {
    render() {
        return (
            <ScPayments>
                This is $$$$!
            </ScPayments>
        );
    }
}

export default Payments;
