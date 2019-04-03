import React, { Component } from 'react';
import styled from 'styled-components';
import NavItem from "./Nav/NavItem";

import VIEWSTATES from '../Common/viewStates';
import PEEPSSTATES from "../Common/peepsStates";

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
const ScNavBottom = styled.ul`
    padding-left: 0;
    padding-bottom: 0;
    bottom: 0px;
    width: 20%;
    position: fixed;
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
                    <NavItem name={VIEWSTATES.PROFILE} viewState={VIEWSTATES.PROFILE} updateView={this.props.updateView} />
                    <NavItem name={VIEWSTATES.PEEPS} viewState={VIEWSTATES.PEEPS} updateView={this.props.updateView} flavor={PEEPSSTATES.NORMAL}/>
                    <NavItem name={VIEWSTATES.MEALS} viewState={VIEWSTATES.MEALS} updateView={this.props.updateView} />
                    <NavItem name={VIEWSTATES.PAYMENT} viewState={VIEWSTATES.PAYMENT} updateView={this.props.updateView} />
                </ScNavTop>
                <ScNavBottom>
                    <NavItem name={VIEWSTATES.INVITE} viewState={VIEWSTATES.PEEPS} updateView={this.props.updateView} flavor={PEEPSSTATES.ADDFRIEND} />
                    <NavItem name={VIEWSTATES.LOGOUT} viewState={VIEWSTATES.LOGOUT} updateView={this.props.updateView} />
                </ScNavBottom>
            </ScNav>
        );
    }
}

export default Nav;
