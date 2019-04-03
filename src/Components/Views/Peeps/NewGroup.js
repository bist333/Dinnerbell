import React, { Component } from 'react';
import styled from 'styled-components';
import UserColumn from "./UserColumn";

import Cookies from 'universal-cookie';

const cookies = new Cookies();

class NewGroup extends Component {
    constructor(props){
        super(props);
// eslint-disable-next-line no-undef
        this.state={friends: cookies.get('friends').friends }
    }
    render(){
        console.log(this.state);
        return(
            <React.Fragment>
                <UserColumn friends={this.state.friends} title={'Friends'} bottom={'ADD'}/>
                <UserColumn id={'new'} title={'New Group Name'} bottom={'SAVE'} friends={[]} />
            </React.Fragment>
        )
    }
}

export default NewGroup;



//unselectOthers={this.unselectOthers} selected={this.state.selected === friend.name}