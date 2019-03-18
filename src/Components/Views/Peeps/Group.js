import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../../../logo.svg'

const ScGroup = styled.div`
    height: 40px;
    text-align: center;
    font-size: 14px;
    display: flex;
    padding-bottom: 12px;
`;

const ScProfilePicture = styled.img`
    width: 30%;
    height: 100%;
`;

const ScGroupInfo = styled.span`
    margin: auto 0px;
`;


class Group extends Component {

    render() {
        return (
            <ScGroup>
                <ScProfilePicture src={logo} alt={"profile"}/>
                <ScGroupInfo>
                    {this.props.group.name}
                    <br />
                    {this.props.group.members.map(group => <span> {group}, </span>)}
                </ScGroupInfo>
            </ScGroup>
        );
    }
}

export default Group;
