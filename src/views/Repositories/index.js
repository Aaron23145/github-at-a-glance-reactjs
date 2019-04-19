import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'

import RepositoriesItem from './RepositoriesItem';
import LoadingCircle from '../../LoadingCircle';
import NotFound from '../../NotFound';
import { isLanguageSupported, getApiUrl, prettyFormatLanguage } from '../../utils';
import { CACHE_REPOSITORIES } from '../../actions/index';

import './index.css';

class Repositories extends Component {
  constructor(props) {
    super(props);

    this.language = this.props.match.params.language;
  }

  componentDidMount() {
    if (!(this.language in this.props.repositories)) {
      axios.get(getApiUrl('repositories', this.language)).then((res) => {
      this.props.CACHE_REPOSITORIES(this.language, res.data);
      }).catch((err) => {
        if (err.response.status === 403) {
          this.props.history.replace('/api_limited');
        } else {
          console.error(err);
        }
      });
    }
  }

  render() {
    const repositories = this.props.repositories[this.language]

    if (!isLanguageSupported(this.language)) {
      return (
        <NotFound />
      );
    }

    if (!repositories) {
      return (
        <LoadingCircle />
      );
    }

    return (
      <section className="Repositories">
        <h2>{ prettyFormatLanguage(this.language) } Popular Repositories</h2>
        { repositories.items.map((repo) => <RepositoriesItem repo={repo} key={repo.id} />) }
      </section>
    );
  }
}

function mapStateToProps(state) {
  const { repositories } = state;
  return { repositories };
}

export default connect(mapStateToProps, { CACHE_REPOSITORIES })(Repositories);
