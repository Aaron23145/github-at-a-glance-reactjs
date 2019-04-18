import React, { Component } from 'react';

import './RepositoriesStars.css';

class RepostoriesStars extends Component {
  render() {
    return (
      <div className="RepositoriesStars">
        <div>{ this.props.children }</div>
        <i className="fas fa-star RepositoriesStars__icon" />
      </div>
    );
  }
}

export default RepostoriesStars;
