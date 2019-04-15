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
        <h3 className="LanguagesItem__name">{ this.props.language }</h3>
      </div>
    );
  }
}

export default LanguagesItem;
