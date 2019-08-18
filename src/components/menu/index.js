import React from "react";
import "./menu.scss";
import { BrowserRouter, Link } from "react-router-dom";

function Menu() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={`/`} className="navbar-brand">
                Healers Garden
            </Link>
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

            <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to={`/`} className="nav-link">
                            Contact
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to={`/healer/5d2b2a69971bba67e01e3c46`}
                            className="nav-link"
                        >
                            Healer
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/healers`} className="nav-link">
                            Healers
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/login`} className="nav-link">
                            Login
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/register`} className="nav-link">
                            Register
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Menu;
