import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class NotFound extends Component {
  render() {
    this.props.history.replace('/');
    return (
      <div />
    );
  }
}

export default withRouter(NotFound);
