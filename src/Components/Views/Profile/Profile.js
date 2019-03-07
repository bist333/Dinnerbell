import React, { Component } from 'react';
import styled from 'styled-components';


const ScProfile = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 24px;
`;


class Profile extends Component {
    render() {
        return (
            <ScProfile>
                This is ( ͡° ͜ʖ ͡°)
            </ScProfile>
        );
    }
}

export default Profile;
