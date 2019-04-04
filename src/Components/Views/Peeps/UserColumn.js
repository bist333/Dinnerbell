import React, { Component } from 'react';
import styled from 'styled-components';
import Friend from "./Friend";
import Group from "./Group";

import Cookies from 'universal-cookie';

const cookies = new Cookies();

const ScUserColumn = styled.div`
    width: 30%;
    text-align: center;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    border: 2px solid #EF476F;
    border-radius: 15px;
`;

const ScTopBox = styled.div`
    border-radius: 10px 10px 0 0;
    
    width: 100%;
    height: 20px;
    background-color: #EF476F;
    
    font-size: 14px;
    font-weight: bold;
    color: #00000085;
    
    padding-bottom: 4px;
`;

const ScBottomBox = styled.div`
    border-radius: 0 0 10px 10px;
    
    width: 100%;
    height: 20px;
    background-color: #EF476F;
    
    font-size: 14px;
    font-weight: bold;
    color: #00000085;
    
    cursor: pointer;
    
    margin-top: auto;
    padding-bottom: 4px;
`;

class UserColumn extends Component {

    constructor(props){
        super(props);
        this.state = {friends: [], groups: []};

        this.unselectOthers = this.unselectOthers.bind(this);
        this.unselectOtherF = this.unselectOtherF.bind(this);
    }

    componentWillMount(){
            this.renderFriends();
            console.log(this.props.bottomonclick);
    }

    componentDidMount(){
        if (this.props.id === 'groups') {
            this.renderGroups();
        }
    }

    getFriends(){
        return cookies.get('friends');
    }

    getGroups() {
        return cookies.get('groups');
    }

    renderFriends() {
        let friends;
        if (this.props.friends) {
            this.setState({propfriends: this.props.friends});
            friends = this.props.friends;
        }
        else {
            friends = this.getFriends();
        }
            let elements = [];
            friends.forEach(friend => {
                elements.push(<Friend friend={friend} unselectOtherF={this.unselectOtherF} unselectOthers={this.unselectOtherF} select={this.props.newGroupSelect} isSelected={this.state.selectedF === friend.name}/>);
            });
            this.setState({friends: elements})
        }

    unselectOtherF(friend){
        this.setState({selectedF: friend}, () => this.renderFriends());
        this.props.newGroupSelect && this.props.newGroupSelect(friend);
    }

    renderGroups() {

        let groups = this.props.groups || this.getGroups();
        let elements = [];
        groups.forEach(group => {
            elements.push(<Group group={group} groupMenu={this.props.groupMenu || null} unselectOthers={this.unselectOthers} selected={this.state.selected === group.name}/>);
        });
        this.setState({groups: elements})
    }

    unselectOthers(group){
        this.setState({selected: group}, () => this.renderGroups());
    }

    render() {
        if (this.props.friends && this.state.propfriends && this.props.friends !== this.state.propfriends){
            this.renderFriends();
        }
        return (
            <ScUserColumn>
                <ScTopBox>{this.props.title}</ScTopBox>
                {this.state.friends && this.props.id !== 'groups' && this.state.friends.map(friend => <div> {friend} </div>)}
                {this.props.id === 'groups' || this.props.groups ? this.state.groups.map(group => <div> {group} </div>) : ''}
                <ScBottomBox onClick={this.props.bottomonclick ? () => this.props.bottomonclick() : false}>{this.props.bottom}</ScBottomBox>
            </ScUserColumn>
        );
    }
}

export default UserColumn;
