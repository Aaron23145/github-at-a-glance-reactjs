import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import Navbar from './Navbar';
import MainContainer from './MainContainer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Navbar />
          <MainContainer />
        </Container>
      </div>
    );
  }
}

export default App;
