import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Navbar from './Navbar/Navbar';
import MainContainer from './MainContainer';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router className="App">
        <Container>
          <Navbar />
          <MainContainer />
        </Container>
      </Router>
    );
  }
}

export default App;
