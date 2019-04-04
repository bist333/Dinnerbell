import React, { Component } from 'react';
import styled from 'styled-components';
import UserColumn from "./UserColumn";
import Friend from "./Friend";

class AddFriend extends Component {

    constructor(props){
        super();
        this.state = {searchbar: ''}
    }


    render(){
        let friends = [];
        friends.push({name: 'timmy'});
        friends.push({name: 'Bradley'});
        friends.push({name: 'megan'});
        friends.push({name: 'Bruce Banner'});
        friends.push({name: 'Steven Chofee'});

        return(
            <UserColumn title={'Find a new Friend!'} bottom={'Search'} friends={friends} />

        )
    }
}

export default AddFriend;