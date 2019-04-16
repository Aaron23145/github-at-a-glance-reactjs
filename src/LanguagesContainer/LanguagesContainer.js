import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import LanguagesItem from './LanguagesItem';

import { APP_LANGUAGES } from '../utils';

import './LanguagesContainer.css';

class LanguagesContainer extends Component {
  render() {
    const languagesItems = Object.entries(APP_LANGUAGES).map(language => {
      const [key, value] = language;
      return (
        <Col md={4} lg={3} key={key}>
          <LanguagesItem logo={value} language={key} />
        </Col>
      );
    });

    return (
      <section className="LanguagesContainer">
        <h2 className="LanguagesContainer__title">Popular Languages</h2>
        <Row className="LanguagesContainer__Row">
          { languagesItems }
        </Row>
      </section>
    );
  }
}

export default LanguagesContainer;
