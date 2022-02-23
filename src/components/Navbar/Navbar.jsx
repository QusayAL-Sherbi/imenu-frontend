import React, { useState } from 'react';

import './Navbar-style.css';

let Navbar = () => {

  const [menu, setMenu] = useState(false);

  const menuHandler = () => {
    setMenu(true);
    if (menu === true) {
      document.querySelector('.navbar-collapse').classList.toggle('show');
    }
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <h2><a href="" className="logo-link">iMenu</a></h2>
        </div>
        <div className="navbar-toggler" onClick={menuHandler}>
          <i className="bi bi-list toggler-icon"></i>
        </div>
        <div className="navbar-collapse">
          <ul className="navbar-nav list-unstyled">
          <li className="nav-item">
              <a href="" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">Serivces</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
