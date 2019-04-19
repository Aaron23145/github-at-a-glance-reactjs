import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';

import AuthorContainer from './AuthorContainer';
import LoadingCircle from '../../LoadingCircle'
import { CACHE_REPO_DETAILS } from '../../actions/index';
import { getApiUrl } from '../../utils';

import './index.css';

class Repository extends Component {
  constructor(props) {
    super(props);

    const { author, name } = this.props.match.params;
    this.fullName = `${author}/${name}`;
  }

  componentDidMount() {
    if (!(this.fullName in this.props.repoDetails)) {
      axios.get(getApiUrl('repository', this.fullName)).then((res) => {
        this.props.CACHE_REPO_DETAILS(this.fullName, res.data)
      }).catch((err) => {
        if (err.response.status === 404) {
          this.props.history.replace('/');
        } else {
          console.error(err);
        }
      });
    }
  }

  render() {
    if (!(this.fullName in this.props.repoDetails)) {
      return (
        <LoadingCircle />
      );
    }

    const repo = this.props.repoDetails[this.fullName];

    const { name, owner } = repo;

    return (
      <div className="Repository">
        <Row>
          <Col className="Repository__left-container">
            <Row>
              <Col xs={12} className="Repository__name box">{ name }</Col>
              <Col xs={12} className="Repository__sw-container">
                <Row>
                  <Col className="Repository__stars box">Stars</Col>
                  <Col className="Repository__watchers box">Watchers</Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col className="Repository__author-container box">
            <AuthorContainer author={owner} />
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { repoDetails } = state;
  return { repoDetails };
}

export default connect(mapStateToProps, { CACHE_REPO_DETAILS })(Repository);
