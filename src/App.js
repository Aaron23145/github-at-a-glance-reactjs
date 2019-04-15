import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col>
              Hello, world
            </Col>
            <Col>
              Lorem ipsum
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
