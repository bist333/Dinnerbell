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

const ScTitle = styled.h4`
    border-bottom: 1px solid;
    margin: 12px 0;
    padding-bottom: 4px;
`;

const ScBottomBox = styled.span`
    margin-top: auto;
    padding-bottom: 4px;
    border-top: 1px solid;
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
        let friend1 = {name: 'Jim'};
        let friend2 = {name: 'John'};
        let friend3 = {name: 'James'};
        return [friend1,friend2,friend3];
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
                console.log(this.state.selected === friend.name);
                console.log(this.state.selected);
                console.log(friend.name);
            });
            this.setState({friends: elements})
        }
    }

    renderGroups() {
        let groups = this.getGroups();
        let elements = [];
        groups.forEach(group => {
            elements.push(<Group group={group}/>);
        });
        this.setState({groups: elements})
    }

    unselectOthers(friend){
        console.log(friend);
        this.setState({selected: friend}, () => this.renderFriends());
        console.log('called');
    }

    render() {
        return (
            <ScUserColumn>
                <ScTitle>{this.props.title}</ScTitle>
                {this.state.friends && this.props.id !== 'groups' && this.state.friends.map(friend => <div> {friend} </div>)}
                {this.props.id === 'groups' ? this.state.groups.map(group => <div> {group} </div>) : ''}
                <ScBottomBox onClick={this.props.bottomonclick ? () => this.props.bottomonclick() : false}>{this.props.bottom}</ScBottomBox>
            </ScUserColumn>
        );
    }
}

export default UserColumn;
