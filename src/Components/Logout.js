import React, { Component } from 'react';
import styled from 'styled-components';


const ScLogout = styled.div`
    text-align: center;
    margin-top: 2%;
`;

class Logout extends Component {

    render() {
        return (
            <ScLogout>
                Bye!
            </ScLogout>
        );
    }
}

export default Logout;
