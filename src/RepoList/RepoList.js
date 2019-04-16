import React, { Component } from 'react';

import { isLanguageSupported, prettyFormatLanguage } from '../utils';

import './RepoList.css';

class RepoList extends Component {
  render() {
    const { language } = this.props.match.params;

    if (isLanguageSupported(language)) {
      return (
        <div>
          Language supported: { prettyFormatLanguage(language) }
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
