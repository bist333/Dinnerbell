import React, { Component } from 'react';
import styled from 'styled-components';
import UserColumn from "./UserColumn";
import AddFriend from "./AddFriend";
import NewGroup from "./NewGroup";
import PEEPSTATES from "../../../Common/peepsStates";
import VIEWSTATES from "../../../Common/viewStates";

const ScHeaderComtainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 24px;
`;

const ScPeeps = styled.div`
    text-align: center;
    font-size: 24px;
    display: flex;
    padding: 5% 10%;
    justify-content: space-between;
`;

const ScButton = styled.div`
   border: 1px solid;
   padding: 10px;
   width: 80%;
   margin: 10%;
   
   &:hover{
   background-color: #950020;
   }
`;

const ScGroupMenu = styled.div`
    display: flex;
    flex-direction: column;
`;

class Peeps extends Component {
    constructor(props) {
        super(props);
        this.state = {view: undefined};

        this.changeToAddFriend = this.changeToAddFriend.bind(this);
        this.changeToNewGroup = this.changeToNewGroup.bind(this);
        this.changeToNormal = this.changeToNormal.bind(this);
        this.changeToGroupMenu = this.changeToGroupMenu.bind(this);
    }

    componentWillMount(){
        this.setState({update: true})
    }

    selectView() {
        switch (this.state.view) {
            case PEEPSTATES.ADDFRIEND:
                this.setState({renderedView:
                    <React.Fragment>
                        <AddFriend/>
                        <ScGroupMenu>
                            Invite a friend who isnt on Dinnerbell yet!
                            <ScButton onClick={() => alert('Email sent to the email address you totally just provided us')}>Email</ScButton>
                            <ScButton onClick={() => alert('Message and data rates may apply')}>SMS</ScButton>
                            <ScButton onClick={() => alert('Carrier Pidgeon is on his way!')}>Carrier Pidgeon</ScButton>
                        </ScGroupMenu>
                    </React.Fragment>
                });
                break;
            case PEEPSTATES.NEWGROUP:
                this.setState({renderedView: <NewGroup/>});

                break;
            case PEEPSTATES.GROUPMENU:
                this.setState({renderedView:
                    <React.Fragment>
                        <ScGroupMenu>
                            <ScButton onClick={() => this.props.updateView(VIEWSTATES.STARTMEAL)}>Start A Meal</ScButton>
                            <ScButton>Edit Group</ScButton>
                            <ScButton>Leave Group</ScButton>
                        </ScGroupMenu>
                        <UserColumn id= {'groups'} title= {'Your Groups'} bottom={'+ New Group'} bottomonclick={this.changeToNewGroup} groupMenu={this.changeToGroupMenu}/>
                    </React.Fragment>});
                break;
            default:
                this.setState({renderedView:
                    <React.Fragment>
                        <UserColumn id= {'friends'} title= {'Your Peeps'} bottom={'+ Add Friend'} bottomonclick={this.changeToAddFriend}/>
                        <UserColumn id= {'groups'} title= {'Your Groups'} bottom={'+ New Group'} bottomonclick={this.changeToNewGroup} groupMenu={this.changeToGroupMenu}/>
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

    changeToGroupMenu(){
        this.setState({view: PEEPSTATES.GROUPMENU});
        this.setState({update: true});
    }

    changeToNormal(){
        this.setState({view: PEEPSTATES.NORMAL});
        this.setState({update: true});
    }

    render() {
        console.log(this.props.flavor);
        if (this.props.flavor && !this.state.view){
            this.setState({view: this.props.flavor})
        }
        else if (!this.state.renderedView || this.state.update){
            this.selectView()
        }

        return (
            <ScHeaderComtainer>
            {this.props.flavor === PEEPSTATES.GROUPMENU ? <div> Please select a group to dine with! </div> : ''}
                <ScPeeps>
                    {this.state.renderedView}
                </ScPeeps>
            </ScHeaderComtainer>
        );
    }
}

export default Peeps;
