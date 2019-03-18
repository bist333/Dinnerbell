import React, { Component } from 'react';
import styled from 'styled-components';
import Friend from "./Friend";


const ScUserColumn = styled.div`
    text-align: center;
    font-size: 14px;
    display: flex;
    flex-direction: column;
`;


class UserColumn extends Component {

    constructor(props){
        super(props);
        this.state= []
    }

    componentWillMount(){
        this.renderFriends()
    }

    getFriends(){
        let friend1 = {name: 'Jim'};
        let friend2 = {name: 'John'};
        return [friend1,friend2];
    }

    renderFriends() {
        let friends =this.getFriends();
        let elements = [];
        friends.forEach(friend => {
            elements.push(<Friend friend={friend}/>);
        });
            this.setState({friends: elements})
    }

    render() {
        return (
            <ScUserColumn>
                {this.state.friends.map(station => <div> {station} </div>)}
            </ScUserColumn>
        );
    }
}

export default UserColumn;
