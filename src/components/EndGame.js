import React from 'react';
import '../styles/style.css';
import NavBar from './NavBar';

export default function EndGame() {

    return (
        <div>
            <div>
            <NavBar/>
            </div>
            <div className="container-fluid pageColor">
            <p>
                Congrats You Finished the Game!
            </p>
        </div>
        </div>
    )
}
