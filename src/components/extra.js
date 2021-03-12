import React from 'react';
import '../styles/shape.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from "./components/Card";

import Card from "./Card";

export default class Shape extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            color: null,
            quantity: 0,
            shading: null,
            highlighted: false,
        }
    }

    render() {
        return (

        //     <div className="card-body bg-dark" style={{width:"15rem", height:"10rem"}}> 
        //     <div className="pacman"></div>
        //   </div>
        <div>
        <Card>
        <svg viewBox="0 0 230 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <pattern id="star" viewBox="0,0,10,10" width="10%" height="10%">
            <polygon points="0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"/>
            </pattern>
        </defs>

        <circle cx="50"  cy="50" r="50" fill="url(#star)"/>
        {/* <circle cx="180" cy="50" r="40" fill="none" stroke-width="20" stroke="url(#star)"/> */}
        </svg>
        </Card>
        </div>

        )
    }
}


import React from 'react';
import '../styles/shape.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Shape extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            color: null,
            quantity: 0,
            shading: null,
            highlighted: false,
        }
    }

    render() {
        return (

        //     <div className="card-body bg-dark" style={{width:"15rem", height:"10rem"}}> 
        //     <div className="pacman"></div>
        //   </div>
        <div>
        <div className="card-body card-extra" bg-dark style={{width:"8rem", height:"10rem"}}> 
        <svg viewBox="0 0 230 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <pattern id="star" viewBox="0,0,10,10" width="10%" height="10%">
            <polygon points="0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"/>
            </pattern>
        </defs>

        <circle cx="50"  cy="50" r="50" fill="url(#star)"/>
        {/* <circle cx="180" cy="50" r="40" fill="none" stroke-width="20" stroke="url(#star)"/> */}
        </svg>
        </div>
        </div>

        )
    }
}

