import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Header.css';
import { Link } from 'react-scroll';
// import { Link } from 'react-scroll';

function Header() {
  return (
    <header className>
      <nav className="header container ">
        <div className="container d-flex justify-content-between flex-column flex-lg-row">
          <h2 className="mx-auto my-auto mx-lg-0">Portfolio</h2>
          <div className="mx-lg-0 mx-auto">
            <ul className="d-flex justify-content-lg-between links-list text-center justify-content-center">
              <li>
                <Link className="animation-hover" to="hero-section" >
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  className="animation-hover"
                  to="skills-section"
                >
                  <span>Skills</span>
                </Link>
              </li>
              <li>
                <Link className="animation-hover" to="projects-section">
                  <span>Projects</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
