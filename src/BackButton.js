import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './BackButton.css';

class BackButton extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.history.goBack();
  }

  render() {
    return (
      <button onClick={this.handleClick} className="BackButton box">
        <i className="fas fa-arrow-left" />
      </button>
    );
  }
}

export default withRouter(BackButton);
