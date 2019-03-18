import React, { Component } from 'react';
import styled from 'styled-components';
import UserColumn from "./UserColumn";


const ScPeeps = styled.div`
    text-align: center;
    color: blue;
    font-size: 24px;
    display: flex;
`;


class Peeps extends Component {
    render() {
        return (
            <ScPeeps>
                <UserColumn/>
                <UserColumn/>
            </ScPeeps>
        );
    }
}

export default Peeps;
