import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import LanguagesContainer from './LanguagesContainer/LanguagesContainer';
import RepoList from './RepoList/RepoList';
import RepoDetailed from './RepoDetailed/RepoDetailed';
import NotFound from './NotFound';

import './MainContainer.css';

class MainContainer extends Component {
  render() {
    return (
      <main className="MainContainer">
        <Switch>
          <Route exact path="/" component={LanguagesContainer} />
          <Route exact path="/lang/:language" component={RepoList} />
          <Route exact path="/repo/:author/:name" component={RepoDetailed} />
          <Route component={NotFound} />
        </Switch>
      </main>
    );
  }
}

export default MainContainer;
