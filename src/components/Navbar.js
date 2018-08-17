import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <header>
          <h2><Link id="homeAnchor" to='/'>Lazy Recipe Finder</Link></h2>
      </header>
    );
  }
}

export default Navbar;
