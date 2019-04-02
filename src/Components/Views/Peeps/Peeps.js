import React, { Component } from 'react';
import styled from 'styled-components';
import UserColumn from "./UserColumn";
import AddFriend from "./AddFriend";
import NewGroup from "./NewGroup";
import PEEPSTATES from "../../../Common/peepsStates";

const ScPeeps = styled.div`
    text-align: center;
    font-size: 24px;
    display: flex;
    padding: 5% 10%;
    justify-content: space-between;
`;

class Peeps extends Component {
    constructor() {
        super();
        this.state = {view: PEEPSTATES.NORMAL};

        this.changeToAddFriend = this.changeToAddFriend.bind(this);
        this.changeToNewGroup = this.changeToNewGroup.bind(this);
        this.changeToNormal = this.changeToNormal.bind(this);
    }

    componentWillMount(){
        this.setState({view: PEEPSTATES.NORMAL, update: true})
    }

    selectView() {
        switch (this.state.view) {
            case PEEPSTATES.ADDFRIEND:
                this.setState({renderedView: <AddFriend/>});
                break;
            case PEEPSTATES.NEWGROUP:
                this.setState({renderedView: <NewGroup/>});
                break;
            default:
                this.setState({renderedView:
                    <React.Fragment>
                        <UserColumn id= {'friends'} title= {'Your Peeps'} bottom={'+ Add Friend'} bottomonclick={this.changeToAddFriend}/>
                        <UserColumn id= {'groups'} title= {'Your Groups'} bottom={'+ New Group'} bottomonclick={this.changeToNewGroup}/>
                    </React.Fragment>});
        }
        this.setState({update: false});
    }

    changeToAddFriend(){
        this.setState({view: PEEPSTATES.ADDFRIEND});
        this.setState({update: true});
    }

    changeToNewGroup(){
        this.setState({view: PEEPSTATES.NEWGROUP});
        this.setState({update: true});
    }

    changeToNormal(){
        this.setState({view: PEEPSTATES.NORMAL});
        this.setState({update: true});
    }

    render() {

        if (!this.state.renderedView || this.state.update){
            this.selectView()
        }

        return (
            <ScPeeps>
                {this.state.renderedView}
            </ScPeeps>
        );
    }
}

export default Peeps;
