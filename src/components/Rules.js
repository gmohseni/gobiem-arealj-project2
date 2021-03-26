import React from 'react';
import NavBar from './NavBar';
import '../styles/style.css';
import example1 from '../imgs/example1.png';
import example2 from '../imgs/example2.png';
import example3 from '../imgs/example3.png';

export default function Rules() {

    return (
        <div>
            <div>
            <NavBar/>
            </div>
            <div className="container-fluid pageColor">
            <h4>Rules</h4>
            <p>The object of the game is to identify a 'Set' of three cards from 12 cards laid out on the table. Each card has a variation of the following four features:</p>
            <ol>
                <li><strong>COLOR:</strong> Each card is red, green, or blue.</li>
                <li><strong>SYMBOL:</strong> Each card contains circles, squares, or rectangles.</li>
                <li><strong>NUMBER:</strong> Each card has one, two, or three symbols.</li>
                <li><strong>SHADING:</strong> Each card is solid, empty, or patterned.</li>
            </ol>
            <p>A 'Set' consists of three cards in which each feature is EITHER the same on each card OR is different on each card. 
                That is to say, any feature in the 'Set' of three cards is either common to all three cards or is different on each card.</p>
            <h6>Examples of sets:</h6>
            <ol>
                <li><div>
                    <p><strong>color:</strong> different on each card, 
                    <strong> symbol:</strong> the same on each card (rectangle), 
                    <strong> number:</strong> the same on each (three), 
                    <strong> shading:</strong> the same on each card (solid).</p>
                    <img src={example1} style={{height: "200px"}} alt="example1"/>
                    </div>
                </li>
                <li><div>
                    <p><strong>color:</strong> different on each card, 
                    <strong> symbol:</strong> different on each card, 
                    <strong> number:</strong> different on each card, 
                    <strong> shading:</strong> different on each card.</p>
                    <img src={example2} style={{height: "200px"}} alt="example1"/>
                    </div>
                </li>
                <li>
                    <div>
                        <p><strong>color:</strong> the same on each card (red), 
                        <strong> symbol:</strong> the same on each card (square), 
                        <strong> number:</strong> different on each card, 
                        <strong> shading:</strong> different on each card.</p>
                        <img src={example3} style={{height: "200px"}} alt="example1"/>
                    </div>
                </li>
            </ol>
            </div>
        </div>
    )
}
