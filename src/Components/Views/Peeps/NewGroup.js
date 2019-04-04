import React, { Component } from 'react';
import styled from 'styled-components';
import UserColumn from "./UserColumn";

import Cookies from 'universal-cookie';

const cookies = new Cookies();

class NewGroup extends Component {
    constructor(props){
        super(props);
// eslint-disable-next-line no-undef
        this.state={friends: cookies.get('friends'), friends2: [] };

        this.addFriend = this.addFriend.bind(this);
        this.onSelect = this.onSelect.bind(this);
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
        for (i = 0; i < th)
    }

    render(){
        console.log(this.state);
        return(
            <React.Fragment>
                <UserColumn friends={this.state.friends} title={'Friends'} bottom={'ADD'} bottomonclick={this.addFriend} newGroupSelect={this.onSelect}/>
                <UserColumn title={'New Group Name'} bottom={'SAVE'} friends={this.state.friends2} bottomonclick={() => console.log('swaaaaaag')}/>
            </React.Fragment>
        )
    }
}

export default NewGroup;



//unselectOthers={this.unselectOthers} selected={this.state.selected === friend.name}