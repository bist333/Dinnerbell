import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'styled-components';

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
                <header>
                    header
                </header>
            </ScHeader>
        );
    }
}

export default Header;
