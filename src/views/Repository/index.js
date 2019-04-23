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
          <Col xs={12} sm={5} className="Repository__left-container">
            <Row>
              <Col className="Repository__name-lang box text-center">
                <a href={html_url} target="_blank" rel="noreferrer noopener" className="Repository__name-lang__link">
                  { name } ({ language }) <i className="fas fa-link" />
                </a>
              </Col>
              <div className="w-100" />
              <Col xs={5} sm={12} md={5} className="Repository__stars box mt-2">
                <div className="d-flex justify-content-between align-items-center">
                  { stars }
                  <i className="fas fa-star" />
                </div>
              </Col>
              <Col xs={5} sm={12} md={5} className="Repository__watchers box mt-2 ml-auto">
                <div className="d-flex justify-content-between align-items-center">
                  { watchers }
                  <i className="fas fa-eye" />
                </div>
              </Col>
              <div className="w-100" />
              <Col xs={5} sm={12} md={5} className="Repository__issues box mt-2">
                <div className="d-flex justify-content-between align-items-center">
                  { issues }
                  <i className="fas fa-exclamation-circle" />
                </div>
              </Col>
              <Col xs={5} sm={12} md={5} className="Repository__forks box mt-2 ml-auto">
                <div className="d-flex justify-content-between align-items-center">
                  { forks }
                  <i className="fas fa-code-branch" />
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={5} className="Repository__author-container box ml-auto mt-2 mt-sm-0">
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
