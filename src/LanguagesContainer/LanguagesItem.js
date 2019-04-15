import React, { Component } from 'react';

import './LanguagesItem.css';

class LanguagesItem extends Component {
  render() {
    return (
      <div className="LanguagesItem">
        <img
          className="LanguagesItem__image"
          src={ this.props.logo }
          alt={ this.props.language + ' logo' }
        />
        <h2 className="LanguagesItem__name">{ this.props.language }</h2>
      </div>
    );
  }
}

export default LanguagesItem;
