import React, { Component, } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

import GitHubUser from './GitHubUser';
import GitHubStars from './GitHubStars';

import './Repository.css';

class Repository extends Component {
  render() {
    const { name, owner, description, stargazers_count } = this.props.repo

    return (
      <Link to={`/repo/${this.props.id}`}>
        <Row className="Repository box">
          <Col
            xs={12}
            md={10}
            xl={6}
            className="Repository__name"
          >
            { name }
          </Col>
          <Col
            xs={12}
            md={{ order: 2, span: 12 }}
            xl={{ order: 1, span: 4 }}
            className="Repository__owner"
          >
            <GitHubUser user={owner} />
          </Col>
          <Col
            xs={{ order: 1, span: 12 }}
            md={{ order: 1, span: 2 }}
            xl={{ order: 2, span: 2 }}
            className="Repository__stars"
          >
            <GitHubStars>{ stargazers_count }</GitHubStars>
          </Col>
          <Col
            xs={12}
            md={{ order: 3, span: 12 }}
            xl={{ order: 3, span: 12 }}
            className="Repository__description"
          >
            { description }
          </Col>
        </Row>
      </Link>
    );
  }
}

export default withRouter(Repository);
