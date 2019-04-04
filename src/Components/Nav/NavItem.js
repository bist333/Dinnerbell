import React, { Component } from 'react';
import styled from 'styled-components';


const ScNavItem = styled.li`
    text-align: center;
    padding: 10%;
    border-style: solid;
    border-color: 2px;
    padding-bottom: 30px;
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


class NavItem extends Component {
    render() {
        return (
            <ScNavItem onClick={() => this.props.updateView(this.props.viewState, this.props.flavor)}>
                {this.props.name}
            </ScNavItem>
        );
    }
}

export default NavItem;
