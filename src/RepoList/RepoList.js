import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'

import Repository from './Repository';
import { isLanguageSupported, getApiUrl } from '../utils';
import { CACHE_REPO_LIST } from '../actions/index';

import './RepoList.css';

class RepoList extends Component {
  constructor(props) {
    super(props);
    this.language = this.props.match.params.language;
  }

  componentDidMount() {
    if (!this.props.repoList[this.language]) {
      axios.get(getApiUrl('repositories', this.language)).then((res) => {
        this.props.CACHE_REPO_LIST(this.language, res.data);
      }).catch((err) => {
        console.error(err);
      });
    }
  }

  render() {
    const repoList = this.props.repoList[this.language]

    if (!isLanguageSupported(this.language)) {
      return (
        <div>
          Language { this.language } is not supported.
        </div>
      );
    }

    if (!repoList) {
      return (
        <div>
          Loading...
        </div>
      );
    }

    return (
      <div>
        { repoList.items.map(repo => <Repository repo={repo} key={repo.id} />) }
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { repoList } = state;
  return { repoList };
}

export default connect(mapStateToProps, { CACHE_REPO_LIST })(RepoList);
