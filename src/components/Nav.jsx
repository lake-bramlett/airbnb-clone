import React from 'react';
import { Link } from 'react-router-dom';
import airBnBLogo from './../assets/airbnb_logo_white.png';

function Nav() {
  return (
    <div className="container">
      <div className="logo">
        <img className="container__image" alt="airbnb logo" src={airBnBLogo} />
      </div>
      <ul className="nav-bar">
        <li><Link to="/newhomes">Host a home</Link></li>
        <li><Link to="/newticket">Host an experience</Link></li>
        <li><Link to="/newticket">Help</Link></li>
        <li><Link to="/newticket">Sign up</Link></li>
        <li><Link to="/newticket">Log in</Link></li>
      </ul>
    </div>
  );
}

export default Nav;
