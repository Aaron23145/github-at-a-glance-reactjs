import React, { Component } from 'react';

class RepoDetailed extends Component {
  render() {
    return (
      <div>
        { this.props.match.params.language }
        { this.props.match.params.repo_id }
      </div>
    );
  }
}

export default RepoDetailed;
