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
        let group1 = {name: 'The Boys', members: ['Jim', 'John']};
        let group2 = {name: 'With James', members: ['Jim', 'John', 'James']};
        return [group1, group2];
    }

    renderFriends() {
        if (this.props.friends) {
            this.setState({friends: this.props.friends})
        }
        else {
            let friends = this.getFriends();
            let elements = [];
            friends.forEach(friend => {
                elements.push(<Friend friend={friend} />);
            });
            this.setState({friends: elements})
        }
    }

    renderGroups() {
        let groups = this.getGroups();
        let elements = [];
        groups.forEach(group => {
            elements.push(<Group group={group} groupMenu={this.props.groupMenu} unselectOthers={this.unselectOthers} selected={this.state.selected === group.name}/>);
        });
        this.setState({groups: elements})
    }

    unselectOthers(friend){
        this.setState({selected: friend}, () => this.renderGroups());
    }

    render() {
        return (
            <ScUserColumn>
                <ScTopBox>{this.props.title}</ScTopBox>
                {this.state.friends && this.props.id !== 'groups' && this.state.friends.map(friend => <div> {friend} </div>)}
                {this.props.id === 'groups' ? this.state.groups.map(group => <div> {group} </div>) : ''}
                <ScBottomBox onClick={this.props.bottomonclick ? () => this.props.bottomonclick() : false}>{this.props.bottom}</ScBottomBox>
            </ScUserColumn>
        );
    }
}

export default UserColumn;
