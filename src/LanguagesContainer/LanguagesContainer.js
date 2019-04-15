import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import LanguagesItem from './LanguagesItem';

import './LanguagesContainer.css';

import JavaScriptLogo from './javascript_logo.png';
import JavaLogo from './java_logo.svg';
import HTMLLogo from './html_logo.png';
import PythonLogo from './python_logo.png';
import RubyLogo from './ruby_logo.png';
import PHPLogo from './php_logo.png';
import CSSLogo from './css_logo.png';
import CPPLogo from './cpp_logo.png';

const LANGUAGES = {
  'JavaScript': JavaScriptLogo,
  'Java': JavaLogo,
  'HTML': HTMLLogo,
  'Python': PythonLogo,
  'Ruby': RubyLogo,
  'PHP': PHPLogo,
  'CSS': CSSLogo,
  'C++': CPPLogo,
};

class LanguagesContainer extends Component {
  render() {
    const languagesItems = Object.entries(LANGUAGES).map(language => {
      const [key, value] = language;
      return (
        <Col md={4} lg={3}>
          <LanguagesItem logo={value} language={key} key={key} />
        </Col>
      );
    });

    return (
      <Row className="LanguagesContainer" as="section">
        { languagesItems }
      </Row>
    );
  }
}

export default LanguagesContainer;
