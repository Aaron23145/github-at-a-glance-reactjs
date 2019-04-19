import React, { Component } from 'react';

import './APILimitedMsg.css';

class APILimitedMsg extends Component {
  render() {
    return (
      <div className="APILimitedMsg">
        <i className="APILimitedMsg__icon fas fa-exclamation-circle" />
        <div className="w-100" />
        GitHub API v3 only allows performing 60 requests per hour. You've exceded that limit. Please,
        wait a little and try it again.
      </div>
    );
  }
}

export default APILimitedMsg;
