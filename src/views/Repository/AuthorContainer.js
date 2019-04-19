import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import './AuthorContainer.css';

class AuthorContainer extends Component {
  render() {
    const { html_url: url, login: name, avatar_url } = this.props.author;

    return (
      <a href={url} target="_blank" rel="noreferrer noopener" className="AuthorContainer">
        <Row className="AuthorContainer__row">
          <Col>
            <div className="AuthorContainer__name">{ name }</div>
            <div className="AuthorContainer__link-icon">
              <i className="fas fa-link" />
            </div>
          </Col>
          <Col>
            <img src={avatar_url} alt={`${name} avatar`} className="AuthorContainer__avatar" />
          </Col>
        </Row>
      </a>
    );
  }
}

export default AuthorContainer;
