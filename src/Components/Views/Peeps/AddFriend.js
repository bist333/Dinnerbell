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
        !this.state.searchbar.includes('Steven') ?
            friends = [
                <Friend friend={{name: 'timmy'}}/>,
                <Friend friend={{name: 'Bradley'}}/>,
                <Friend friend={{name: 'megan'}}/>,
                //<Friend name={'Bruce Banner'}/>,
                //<Friend name={'Steven Chofee'}/>
            ]
        :
            friends.push(<Friend name={'Steven Chofee'}/>);
        return(
            <UserColumn title={'Find a new Friend!'} bottom={'Search'} friends={friends}>

            </UserColumn>
        )
    }
}

export default AddFriend;