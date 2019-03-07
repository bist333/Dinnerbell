import React, { Component } from 'react';
import styled from 'styled-components';
import MealTimer from "./Header/MealTimer";

const ScHeader = styled.div`
    position: static;
    height: 10vh;
    border-style: solid;
    border-width: 2px;
    margin-left: 20%;
    text-align: center;
`;

class Header extends Component {
    render() {
        return (
            <ScHeader>
                heasder
                <MealTimer time={300}/>
            </ScHeader>
        );
    }
}

export default Header;
