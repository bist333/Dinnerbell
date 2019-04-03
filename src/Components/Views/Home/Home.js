import React, { Component } from 'react';
import styled from 'styled-components';
import Map from './fake-map.jpg';
import Chat from './fake-chat.jpg';

const ScHome = styled.div`
    text-align: center;
    margin-top: 2%;
`;

const ScMealButton = styled.button`
    margin-top: 2%;
    margin-bottom: 2%;
    width: 50%;
    background-color: #EF476F;
    border: none;
`;

class Home extends Component {
    //Handle Clicking of button
    handleMeal = e => {
        //Create meal dialogue
    }
    
    render() {
        return (
            <ScHome>
                <img src={Map} width="50%" height="auto" />
                <ScMealButton type="button" onClick={this.handleSave}>Make A Meal!</ScMealButton>
                <img src={Chat} width="50%" height="auto" />
            </ScHome>
        );
    }
}

export default Home;
