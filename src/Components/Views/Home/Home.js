import React, { Component } from 'react';
import styled from 'styled-components';
import Map from './fake-map.jpg';
import Chat from './fake-chat.jpg';
import PEEPSSTATES from "../../../Common/peepsStates";
import VIEWSTATES from "../../../Common/viewStates";

const ScHome = styled.div`
    text-align: center;
    margin-top: 2%;
`;

const ScMealButton = styled.button`
    margin-top: 2%;
    margin-bottom: 2%;
    width: 33%;
    text-align: center;
    border-style: solid;
    border-width: 1px;
    cursor: pointer;
    background-color: #EF476F;
    font-size: 18px;
    font-weight: bold;
    color: #F8F8FF;
    border-radius: 10px;
    
    &:hover {
        background-color: #cc3f60;
    }
`;

class Home extends Component {
    
    render() {
        return (
            <ScHome>
                <img src={Map} width="50%" height="auto" alt={'map'}/>
                <ScMealButton type="button" onClick={() => this.props.updateView(VIEWSTATES.PEEPS, PEEPSSTATES.GROUPMENU)}>Make A Meal!</ScMealButton>
                <img src={Chat} width="50%" height="auto" alt={'chat'}/>
            </ScHome>
        );
    }
}

export default Home;
