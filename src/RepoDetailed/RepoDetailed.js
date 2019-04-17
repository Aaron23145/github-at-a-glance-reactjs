import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import LoadingCircle from '../LoadingCircle';
import { CACHE_REPO_DETAILS } from '../actions/index';
import { getApiUrl } from '../utils';

import './RepoDetailed.css';

class RepoDetailed extends Component {
  constructor(props) {
    super(props);

    const { author, name } = this.props.match.params;
    this.fullName = `${author}/${name}`;
  }

  componentDidMount() {
    if (!(this.fullName in this.props.repoDetails)) {
      axios.get(getApiUrl('repoDetails', this.fullName)).then((res) => {
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

    return (
      <div>
        { this.props.match.params.author }
        { this.props.match.params.name }
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { repoDetails } = state;
  return { repoDetails };
}

export default connect(mapStateToProps, { CACHE_REPO_DETAILS })(RepoDetailed);
