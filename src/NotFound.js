import React, { Component } from 'react';

class NotFound extends Component {
  render() {
    this.props.history.replace('/');
    return (
      <div />
    );
  }
}

export default NotFound;
