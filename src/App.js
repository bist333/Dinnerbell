import React, { Component } from 'react';
import styled from 'styled-components';

import Nav from "./Components/Nav";
import Header from "./Components/Header";
import View from "./Components/View";

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
