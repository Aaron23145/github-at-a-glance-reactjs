import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';

import AuthorContainer from './AuthorContainer';
import LoadingCircle from '../../LoadingCircle';
import { CACHE_REPOSITORY } from '../../actions/index';
import { getApiUrl } from '../../utils';

import './index.css';

class Repository extends Component {
  constructor(props) {
    super(props);

    const { author, name } = this.props.match.params;
    this.fullName = `${author}/${name}`;
  }

  componentDidMount() {
    if (!(this.fullName in this.props.repository)) {
      axios.get(getApiUrl('repository', this.fullName)).then((res) => {
        this.props.CACHE_REPOSITORY(this.fullName, res.data)
      }).catch((err) => {
        if (err.response.status === 404) {
          this.props.history.replace('/');
        } else if (err.response.status === 403) {
          this.props.history.replace('/api_limited');
        } else {
          console.error(err);
        }
      });
    }
  }

  render() {
    if (!(this.fullName in this.props.repository)) {
      return (
        <LoadingCircle />
      );
    }

    const repo = this.props.repository[this.fullName];

    const {
      name,
      owner,
      stargazers_count: stars,
      subscribers_count: watchers,
      open_issues_count: issues,
      forks_count: forks,
      language,
      html_url,
      description,
    } = repo;

    return (
      <div className="Repository">
        <Row>
          <Col className="Repository__left-container">
            <Row>
              <Col xs={12} className="Repository__name-lang box text-center">
                <a href={html_url} target="_blank" rel="noreferrer noopener" className="Repository__name-lang__link">
                  { name } ({ language }) <i className="fas fa-link" />
                </a>
              </Col>
              <Col xs={12} className="Repository__sw-container">
                <Row>
                  <Col className="Repository__stars box">
                    <div className="d-flex justify-content-between align-items-center">
                      { stars }
                      <i className="fas fa-star" />
                    </div>
                  </Col>
                  <Col className="Repository__watchers box">
                    <div className="d-flex justify-content-between align-items-center">
                      { watchers }
                      <i className="fas fa-eye" />
                    </div>
                  </Col>
                  <div className="w-100" />
                  <Col className="Repository__issues box">
                    <div className="d-flex justify-content-between align-items-center">
                      { issues }
                      <i className="fas fa-exclamation-circle" />
                    </div>
                  </Col>
                  <Col className="Repository__forks box">
                    <div className="d-flex justify-content-between align-items-center">
                      { forks }
                      <i className="fas fa-code-branch" />
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col className="Repository__author-container box">
            <AuthorContainer author={owner} />
          </Col>
        </Row>
        <div className="Repository__description box">
          { description }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { repository } = state;
  return { repository };
}

export default connect(mapStateToProps, { CACHE_REPOSITORY })(Repository);
