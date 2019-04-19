import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Languages from './views/Languages'
import Repositories from './views/Repositories';
import Repository from './views/Repository';
import APILimitedMsg from './APILimitedMsg';
import NotFound from './NotFound';

import './MainContainer.css';

class MainContainer extends Component {
  render() {
    return (
      <main className="MainContainer">
        <Switch>
          <Route exact path="/" component={Languages} />
          <Route exact path="/lang/:language" component={Repositories} />
          <Route exact path="/repo/:author/:name" component={Repository} />
          <Route exact path="/api_limited" component={APILimitedMsg} />
          <Route component={NotFound} />
        </Switch>
      </main>
    );
  }
}

export default MainContainer;
