import React from 'react';
import '../styles/shape.css';

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
            <div className="pacman"></div>
        )
    }
}
