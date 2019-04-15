import React, { Component } from 'react';

import { ReactComponent as Logo } from './github_icon.svg';

import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="Navbar">
        <Logo className="Navbar__logo" />
        <h1 className="Navbar__title">GitHub at a glance</h1>
      </nav>
    );
  }
}

export default Navbar;
