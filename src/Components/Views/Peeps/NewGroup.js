import React, { Component } from 'react';
import styled from 'styled-components';
import UserColumn from "./UserColumn";

import Cookies from 'universal-cookie';
import VIEWSTATES from "../../../Common/viewStates";

const cookies = new Cookies();

class NewGroup extends Component {
    constructor(props){
        super(props);
// eslint-disable-next-line no-undef
        this.state={friends: cookies.get('friends'), friends2: [] };

        this.addFriend = this.addFriend.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.saveNewGroup = this.saveNewGroup.bind(this);
    }

    onSelect(friend){
        this.setState({selected: friend});
    }

    addFriend() {
        let newfriends2 = this.state.friends2;
        newfriends2 = newfriends2.concat(this.state.friends.filter(item => item.name === this.state.selected));
        let newfriends = this.state.friends;
        newfriends = newfriends.filter(item => item.name !== this.state.selected);
        this.setState({friends2: newfriends2});
        this.setState({friends: newfriends});
    }

    saveNewGroup() {
        const group={};
        let members=[];
        for (let i = 0; i < this.state.friends2.length; i++){
            members.push(this.state.friends2[i].name)
        }
        group.members = members;
        group.name = 'New Group Name';
        this.setState({group: cookies.get('groups')}, () => this.update(group) );

    }

    update(group){
        let groups = this.state.group;
        groups.push(group);
        cookies.set('groups', JSON.stringify(groups));
        this.props.updateView(VIEWSTATES.HOME);
        //this.props.updateView(VIEWSTATES.PEEPS);
    }

    render(){
        return(
            <React.Fragment>
                <UserColumn friends={this.state.friends} title={'Friends'} bottom={'ADD'} bottomonclick={this.addFriend} newGroupSelect={this.onSelect}/>
                <UserColumn title={'New Group Name'} bottom={'SAVE'} friends={this.state.friends2} bottomonclick={this.saveNewGroup}/>
            </React.Fragment>
        )
    }
}

export default NewGroup;