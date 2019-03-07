import React, { Component } from 'react';
import styled from 'styled-components';


const ScPeeps = styled.div`
    text-align: center;
    color: blue;
    font-size: 24px;
`;


class Peeps extends Component {
    render() {
        return (
            <ScPeeps>
                This is a PEEPS!!!
            </ScPeeps>
        );
    }
}

export default Peeps;
