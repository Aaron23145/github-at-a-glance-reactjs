import React, { Component } from 'react';

import './GitHubUser.css';

class GitHubUser extends Component {
  render() {
    const { login: name, avatar_url } = this.props.user;

    return (
      <div className="GitHubUser">
        <div>{ name }</div>
        <img src={avatar_url} alt={`${name} avatar`} className="GitHubUser__img" />
      </div>
    );
  }
}

export default GitHubUser;
