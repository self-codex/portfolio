import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);

  const closeMobBar = () => setClick(!click);

  return (
    <nav className="nav-backgroud">
      <div className="container menu">
        <div className="nav-logo">
          <div>Muhammad Talha</div>
        </div>

        <div className="menu-bar" onClick={() => setClick(!click)}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul
          className={click ? "navbar-nav active" : " navbar-nav"}
          onClick={closeMobBar}
        >
          <li className="nav-item" aria-current="page">
            <Link className="nav-link" to="/" onClick={closeMobBar}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about" onClick={closeMobBar}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#resume" onClick={closeMobBar}>
              Resume
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact" onClick={closeMobBar}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
