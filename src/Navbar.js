import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="Navbar">
        <Link to="/" className="Navbar__link">
          <i className="Navbar__logo fab fa-github" />
          <h1 className="Navbar__title">GitHub at a glance</h1>
        </Link>
      </nav>
    );
  }
}

export default Navbar;
