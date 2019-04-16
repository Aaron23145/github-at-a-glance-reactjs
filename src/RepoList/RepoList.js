import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'

import { isLanguageSupported, prettyFormatLanguage, getApiUrl } from '../utils';
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
    if (isLanguageSupported(this.language)) {
      return (
        <div>
          Language supported: { prettyFormatLanguage(this.language) }

        </div>
      );
    }

    return (
      <div>
        Language { this.language } is not supported.
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { repoList } = state;
  return { repoList };
}

export default connect(mapStateToProps, { CACHE_REPO_LIST })(RepoList);
