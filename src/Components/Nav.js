import React, { Component } from 'react';
import styled from 'styled-components';
import NavItem from "./Nav/NavItem";

import VIEWSTATES from '../Common/viewStates';

const ScNav = styled.div`
    float: left;
    position: static;
    border-style: solid;
    border-width: 2px;
    text-align: center;
    height: 100vh;
    width: 20%;
`;
const ScNavTop = styled.ul`
    padding-left: 0;
    display: flex;
    flex-direction: column;
    list-style: none;
`;

class Nav extends Component {
    render() {
        return (
            <ScNav>
               Nav
                <ScNavTop>
                    <NavItem name={VIEWSTATES.PROFILE} updateView={this.props.updateView} />
                    <NavItem name={VIEWSTATES.PEEPS} updateView={this.props.updateView} />
                    <NavItem name={VIEWSTATES.MEALS} updateView={this.props.updateView} />
                </ScNavTop>
            </ScNav>
        );
    }
}

export default Nav;
