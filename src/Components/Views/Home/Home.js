import React, { Component } from 'react';
import styled from 'styled-components';


const ScMeals = styled.div`
    text-align: center;
`;


class Home extends Component {
    render() {
        return (
            <ScMeals>
                This is the home page.
            </ScMeals>
        );
    }
}

export default Home;
