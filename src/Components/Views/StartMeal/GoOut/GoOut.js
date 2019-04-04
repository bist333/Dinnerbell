import React, { Component } from 'react';
import styled from 'styled-components';
import Map from '../../Home/fake-map.jpg';


const ScGoOut = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1%;
`;

const ScTimeBox = styled.ul`
    text-align: center;
    vertical-align: middle;
    box-shadow: 5px 5px #00000044;
    padding: 1%;
    width: 25%;
    color: #000000B5;
    cursor: pointer;
    background-color: #F0F0F0;
    font-size: 18px;
    font-weight: bold;
    border-radius: 10px;
`;


class GoOut extends Component {
    render() {
        return (
            <ScGoOut>
                <img src={Map} width="60%" height="auto" alt={'map'}/>
                <ScTimeBox>
                    <p>Time: 7:30pm </p>
                </ScTimeBox>
            </ScGoOut>
        );
    }
}

export default GoOut;
