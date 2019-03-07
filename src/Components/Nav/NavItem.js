import React, { Component } from 'react';
import styled from 'styled-components';


const ScNavItem = styled.li`
    text-align: center;
    border-style: solid;
    border-width: 2px;
    padding-bottom: 30px;
    cursor: pointer;
`;


class NavItem extends Component {
    render() {
        return (
            <ScNavItem onClick={() => this.props.updateView(this.props.name)}>
                NavItem: {this.props.name}
            </ScNavItem>
        );
    }
}

export default NavItem;
