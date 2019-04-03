import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../../../logo.svg'

const ScFriend = styled.div`
    height: 40px;
    text-align: center;
    font-size: 14px;
    display: flex;
    padding-bottom: 12px;
`;

const ScFriendBox = styled.div`
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
`;

const ScProfilePicture = styled.img`
    width: auto;
    height: 100%;
`;

const ScUserInfo = styled.span`
    margin: auto 0px;
`;


class Friend extends Component {

    constructor(props){
        super();
        this.state={isSelected:false}
    }

    unselectOthers(){
        if (this.props.unselectOthers) {
            this.props.unselectOthers(this.props.friend.name);
            this.setState({isSelected: true});
        }
    }

    render() {
        return (
            <ScFriendBox isSelected={this.props.selected} onClick={() => this.unselectOthers()}>
                <ScFriend isSelected={this.props.selected} onClick={() => this.unselectOthers()}>
                    <ScProfilePicture src={logo} alt={"profile"}/>
                    <ScUserInfo>{this.props.friend.name}</ScUserInfo>
                </ScFriend>
            </ScFriendBox>
        );
    }
}

export default Friend;
