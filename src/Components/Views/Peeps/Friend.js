import React, { Component } from 'react';
import styled from 'styled-components';


const ScFriend = styled.div`
    text-align: center;
    font-size: 14px;
    display: flex;
    
`;


class Friend extends Component {

    render() {
        return (
            <ScFriend>
                {this.props.friend.name}
            </ScFriend>
        );
    }
}

export default Friend;
