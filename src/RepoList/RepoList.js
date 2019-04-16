import React, { Component } from 'react';

import { isLanguageSupported, formatLanguage } from '../utils';

import './RepoList.css';

class RepoList extends Component {
  render() {
    const { language } = this.props.match.params;

    if (isLanguageSupported(language)) {
      return (
        <div>
          Language supported: { formatLanguage(language) }
        </div>
      );
    }

    return (
      <div>
        Language { language } is not supported.
      </div>
    );
  }
}

export default RepoList;
