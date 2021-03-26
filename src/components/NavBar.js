import React from 'react';
import {Link} from "react-router-dom";
import '../styles/style.css';

export default function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light navBarColor">
            <div className="container-fluid">
                <span className="navbar-brand mb-0">
                    <h1>Set Game</h1>
                </span>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <button className="button">
                                <Link to={"/home"} style={{textDecoration: "none", color: "#333333"}}>Home</Link>
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="button">
                                <Link to={"/rules"} style={{textDecoration: "none", color: "#333333"}}>Rules</Link>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
        </div>
    )
}
