import React from 'react';
import {Link} from "react-router-dom";
import '../styles/style.css';

export default function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">Set Game</span>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><Link to={"/home"} style={{textDecoration: "none"}}>Home</Link></li>
                        <li className="nav-item"><Link to={"/rules"} style={{textDecoration: "none"}}>Rules</Link></li>
                    </ul>
                </div>
            </div>
            </nav>
        </div>
    )
}
