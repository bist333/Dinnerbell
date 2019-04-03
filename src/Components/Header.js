import React, { Component } from 'react';
import styled from 'styled-components';
import MealTimer from "./Header/MealTimer";

const ScHeader = styled.div`
    position: static;
    height: 8vh;
    margin-left: 20%;
    text-align: center;
    background-color: #F8F8FF;
`;

class Header extends Component {
    render() {
        return (
            <ScHeader>
                <br/>
                <MealTimer time={this.props.time}/>
            </ScHeader>
        );
    }
}

export default Header;
