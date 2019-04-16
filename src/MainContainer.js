import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import LanguagesContainer from './LanguagesContainer/LanguagesContainer';
import RepoList from './RepoList/RepoList';

import './MainContainer.css';

class MainContainer extends Component {
  render() {
    return (
      <main className="MainContainer">
        <Route exact path="/" component={LanguagesContainer} />
        <Route path="/lang/:language" component={RepoList} />
      </main>
    );
  }
}

export default MainContainer;
