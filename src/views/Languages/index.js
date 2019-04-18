import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import LanguagesItem from './LanguagesItem';

import { APP_LANGUAGES } from '../../utils';

import './index.css';

class Languages extends Component {
  render() {
    const languagesItems = Object.entries(APP_LANGUAGES).map(language => {
      const [key, value] = language;
      return (
        <Col md={4} lg={3} key={key}>
          <LanguagesItem logo={value.img} language={value.pretty} />
        </Col>
      );
    });

    return (
      <section className="Languages">
        <h2 className="Languages__title">Popular Languages</h2>
        <Row className="Languages__Row">
          { languagesItems }
        </Row>
      </section>
    );
  }
}

export default Languages;
