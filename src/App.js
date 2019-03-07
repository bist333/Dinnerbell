import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'styled-components';

import Nav from "./Nav";
import Header from "./Header";
import View from "./View";

const ScApp = styled.div`
    text-align: center;
`;

class App extends Component {
  render() {
    return (
      <ScApp>
          <Nav/>
          <Header/>
          <View />
      </ScApp>
    );
  }
}

export default App;
