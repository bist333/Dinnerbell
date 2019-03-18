import React, { Component } from 'react';
import styled from 'styled-components';
import UserColumn from "./UserColumn";


const ScPeeps = styled.div`
    text-align: center;
    font-size: 24px;
    display: flex;
    padding: 5% 10%;
    justify-content: space-between;
`;



class Peeps extends Component {
    render() {
        return (
            <ScPeeps>
                <UserColumn id={"friends"}/>
                <UserColumn id={"groups"}/>
            </ScPeeps>
        );
    }
}

export default Peeps;
