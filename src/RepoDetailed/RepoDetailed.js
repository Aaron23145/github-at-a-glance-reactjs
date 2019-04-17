import React, { Component } from 'react';
// import { connect } from 'react-redux';

import './RepoDetailed.css';

class RepoDetailed extends Component {
  render() {
    const { id } = this.props.match.params;

    return (
      <div>
        { id }
      </div>
    );
  }
}

export default RepoDetailed;

// function mapStateToProps(state) {
//   const { repoList } = state;
//   return { repoList };
// }

// export default connect(mapStateToProps)(RepoDetailed);
