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
            <Link className="nav-link" to="/about" onClick={closeMobBar}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/resume" onClick={closeMobBar}>
              Resume
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact" onClick={closeMobBar}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
