import React, { Component } from 'react';
import styled from 'styled-components';
import UserColumn from "./UserColumn";

class NewGroup extends Component {
    render(){
        return(
            <UserColumn />
        )
    }
}

export default NewGroup;



//unselectOthers={this.unselectOthers} selected={this.state.selected === friend.name}