import React, { Component } from 'react';
import styled from 'styled-components';


const ScHomeCooked = styled.div`
    text-align: center;
`;


class HomeCooked extends Component {
    render() {
        return (
            <ScHomeCooked>
                We want a home cooked meal!
            </ScHomeCooked>
        );
    }
}

export default HomeCooked;
