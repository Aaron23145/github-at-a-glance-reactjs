import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import GitHubUser from './GitHubUser';
import GitHubStars from './GitHubStars';

import './Repository.css';

class Repository extends Component {
  render() {
    const { name, owner, description, stargazers_count } = this.props.repo

    return (
      <Row className="Repository box">
        <Col xs={6} className="Repository__name">{ name }</Col>
        <Col xs={4} className="Repository__owner"><GitHubUser user={owner} /></Col>
        <Col xs={2} className="Repository__stars"><GitHubStars>{ stargazers_count }</GitHubStars></Col>
        <Col xs={12} className="Repository__description">{ description }</Col>
      </Row>
    );
  }
}

export default Repository;
