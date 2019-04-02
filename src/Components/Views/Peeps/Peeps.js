import React, { Component } from 'react';
import styled from 'styled-components';
import UserColumn from "./UserColumn";
import PEEPSTATES from "../../../Common/peepStates.js";

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
        this.state = {view: PEEPSTATES.NORMAL}
    }



    render() {
            switch (this.state.view) {
                case PEEPSTATES.ADDFRIEND:
                    this.setState({renderedView: <AddFriend/>});
                    break;
                case PEEPSTATES.NEWGROUP:
                        this.setState({renderedView: <NewGroup/>});
                        break;
                default:
                    this.setState({renderedView:
                    <div>
                        <UserColumn id = {'friends'} />
                        <UserColumn id = {'groups'} />
                    </div>});

            }

        return (
            <ScPeeps>
                {this.state.view === PEEPSTATES.NORMAL ? <UserColumn id={"friends"}/> : ""}
                <UserColumn id={"groups"}/>
            </ScPeeps>
        );
    }
}

export default Peeps;
