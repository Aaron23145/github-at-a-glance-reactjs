import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class NotFound extends Component {
  componentDidMount() {
    this.props.history.replace('/');
  }

  render() {
    return (
      <div />
    );
  }
}

export default withRouter(NotFound);
