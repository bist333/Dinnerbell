import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'styled-components';

const ScNav = styled.div`
    float: left;
    position: static;
    border-style: solid;
    border-width: 2px;
    text-align: center;
    height: 100vh;
    width: 20%;
`;

class Nav extends Component {
    render() {
        return (
            <ScNav>
               Nav
            </ScNav>
        );
    }
}

export default Nav;
