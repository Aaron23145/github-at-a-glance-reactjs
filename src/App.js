import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import Navbar from './Navbar/Navbar';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Navbar />
        </Container>
      </div>
    );
  }
}

export default App;
