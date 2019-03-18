import React, { Component } from 'react';
import styled from 'styled-components';
import Friend from "./Friend";
import Group from "./Group";


const ScUserColumn = styled.div`
    width: 30%;
    text-align: center;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    border-style: solid;
    border-width: 1px;
`;


class UserColumn extends Component {

    constructor(props){
        super(props);
        this.state = {friends: [], groups: []}
    }

    componentWillMount(){
            this.renderFriends();
    }

    componentDidMount(){
        if (this.props.id === 'groups') {
            this.renderGroups();
        }
    }

    getFriends(){
        let friend1 = {name: 'Jim'};
        let friend2 = {name: 'John'};
        let friend3 = {name: 'James'};
        return [friend1,friend2,friend3];
    }

    getGroups() {
        let group1 = {name: 'The Boys', members: [this.state.friends[0].name, this.state.friends[1].name]};
        let group2 = {name: 'With James', members: [this.state.friends[0].name, this.state.friends[1].name, this.state.friends[2].name]};
        return [group1, group2];
    }

    renderFriends() {
        let friends = this.getFriends();
        let elements = [];
        friends.forEach(friend => {
            elements.push(<Friend friend={friend}/>);
        });
            this.setState({friends: elements})
    }

    renderGroups() {
        let groups = this.getGroups();
        let elements = [];
        groups.forEach(group => {
            elements.push(<Group group={group}/>);
        });
        this.setState({groups: elements})
    }

    render() {
        return (
            <ScUserColumn>
                {this.props.id === 'friends' ? this.state.friends.map(friend => <div> {friend} </div>) : ''}
                {this.state.groups.map(group => <div> {group} </div>)}

            </ScUserColumn>
        );
    }
}

export default UserColumn;
