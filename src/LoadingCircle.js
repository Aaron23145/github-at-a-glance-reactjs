import React, { Component } from 'react';

import './LoadingCircle.css';

class LoadingCircle extends Component {
  render() {
    return (
      <div className="LoadingCircle">
        <i className="LoadingCircle__icon fas fa-circle-notch" />
      </div>
    );
  }
}

export default LoadingCircle;
