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

const ScGroupBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: left;
    margin: 5px 10px 10px 5px;
    box-shadow: 5px 5px #00000044;
    width: auto;
    text-align: left;
    color: #000000B5;
    height auto;
    cursor: pointer;
    background-color: ${props => props.isSelected ? "#EF476F" :"#F0F0F0"};
    font-size: 18px;
    font-weight: bold;
    border-radius: 10px;
    
    &:hover {
        background-color: #EF476F;
    }
`;

const ScProfilePicture = styled.img`
    width: auto;
    height: 100%;
`;

const ScGroupInfo = styled.span`
    margin: auto 0px;
`;


class Group extends Component {

    constructor(props){
        super(props);

        this.state={selected: false};
    }

    unselectOthers(){
        this.props.groupMenu();
        this.props.unselectOthers(this.props.group.name);
        this.setState({isSelected: true});
    }

    render() {
        return (
            <ScGroupBox isSelected={this.props.selected} onClick={() => this.unselectOthers()}>
                <ScGroup isSelected={this.props.selected} onClick={() => this.unselectOthers()}>
                    <ScProfilePicture src={logo} alt={"profile"}/>
                    <ScGroupInfo>
                        {this.props.group.name}
                        <br />
                        {this.props.group.members.map(group => <span> {group}, </span>)}
                    </ScGroupInfo>
                </ScGroup>
            </ScGroupBox>
        );
    }
}

export default Group;
