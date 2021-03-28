import React from 'react';
import {Link} from "react-router-dom";
import '../styles/style.css';

export default function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-light nav-bar">
            <div className="container-fluid">
                <span className="navbar-brand mb-0">
                    <h1>Set Game</h1>
                </span>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={"/home"} style={{textDecoration: "none", color: "#333333"}}>
                                <button className="button">Home</button>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/rules"} style={{textDecoration: "none", color: "#333333"}}>
                                <button className="button">Rules</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
        </div>
    )
}
