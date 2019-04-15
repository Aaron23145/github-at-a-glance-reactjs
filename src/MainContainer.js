import React, { Component } from 'react';

import LanguagesContainer from './LanguagesContainer/LanguagesContainer';

import './MainContainer.css';

class MainContainer extends Component {
  render() {
    return (
      <main className="MainContainer">
        <LanguagesContainer />
      </main>
    );
  }
}

export default MainContainer;
