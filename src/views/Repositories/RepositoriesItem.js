import React, { Component, } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

import GitHubUser from './GitHubUser';
import RepositoriesStars from './RepositoriesStars';

import './RepositoriesItem.css';

class RepositoriesItem extends Component {
  render() {
    const { name, owner, full_name, description, stargazers_count } = this.props.repo

    return (
      <Link to={`/repo/${full_name}`}>
        <Row className="RepositoriesItem box">
          <Col
            xs={12}
            md={10}
            xl={6}
            className="RepositoriesItem__name"
          >
            { name }
          </Col>
          <Col
            xs={12}
            md={{ order: 2, span: 12 }}
            xl={{ order: 1, span: 4 }}
            className="RepositoriesItem__owner"
          >
            <GitHubUser user={owner} />
          </Col>
          <Col
            xs={{ order: 1, span: 12 }}
            md={{ order: 1, span: 2 }}
            xl={{ order: 2, span: 2 }}
            className="RepositoriesItem__stars"
          >
            <RepositoriesStars>{ stargazers_count }</RepositoriesStars>
          </Col>
          <Col
            xs={12}
            md={{ order: 3, span: 12 }}
            xl={{ order: 3, span: 12 }}
            className="RepositoriesItem__description"
          >
            { description }
          </Col>
        </Row>
      </Link>
    );
  }
}

export default withRouter(RepositoriesItem);
