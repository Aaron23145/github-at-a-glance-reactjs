import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { normalFormatLanguage } from '../utils';

import './LanguagesItem.css';

class LanguagesItem extends Component {
  render() {
    const {logo, language} = this.props;

    return (
      <Link to={`/lang/${normalFormatLanguage(language)}`}>
        <div className="LanguagesItem box">
            <img
              className="LanguagesItem__image"
              src={ logo }
              alt={ `${language} logo` }
            />
            <h3 className="LanguagesItem__name">{ language }</h3>
        </div>
      </Link>
    );
  }
}

export default LanguagesItem;
