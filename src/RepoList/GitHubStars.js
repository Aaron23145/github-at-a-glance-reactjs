import React, { Component } from 'react';

import './GitHubStars.css';

class GitHubStars extends Component {
  render() {
    return (
      <div className="GitHubStars">
        <div>{ this.props.children }</div>
        <i className="fas fa-star GitHubStars__icon" />
      </div>
    );
  }
}

export default GitHubStars;
