import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../../../logo.svg'

const ScFriend = styled.div`
    height: 40px;
    text-align: center;
    font-size: 14px;
    display: flex;
    padding-bottom: 12px;
    border: ${props => props.isSelected ? 
    'border-color: #9ecaed; box-shadow: 0 0 10px #9ecaed;' : ''}
`;

const ScProfilePicture = styled.img`
    width: 30%;
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
            <ScFriend isSelected={this.props.selected} onClick={() => this.unselectOthers()}>
                <ScProfilePicture src={logo} alt={"profile"}/>
                <ScUserInfo>{this.props.friend.name}</ScUserInfo>
            </ScFriend>
        );
    }
}

export default Friend;
