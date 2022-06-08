import React from 'react';
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <a  className='navbar-brand' href='#about'>
          Hannah's Portfolio
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navbarNav" className='collapse navbar-collapse'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <Link to="/about">
                About Me
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="/projects">
                My Projects
              </Link>
            </li>
            <li className='nav-item : navActive'>
              <Link to="/resume">
                My Resume
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="/contact">
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;