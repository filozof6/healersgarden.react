import React from "react";
import "./menu.scss";
import { BrowserRouter as Link } from "react-router-dom";

function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to={`/`} className="nav-link">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to={`/healer`} className="nav-link">
              Healer
            </Link>
          </li>
          <li className="nav-item">
            <Link to={`/healers`} className="nav-link">
              Healers
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Menu;
