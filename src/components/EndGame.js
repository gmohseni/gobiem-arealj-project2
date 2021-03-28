import React from 'react';
import '../styles/style.css';
import smile from '../imgs/circle-cropped.png';

export default function EndGame() {

    return (
        <div>
            <div className="container-fluid background">
                <div className="row top-padding">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8 text-center">
                        <h1>Congrats! You Finished the Game!</h1>
                        <div className="smile-img">
                            <img src={smile} alt="smiley face"/>
                        </div>
                    </div>
                    <div className="col-sm-2"></div>
                </div>
            </div>
        </div>
    )
}
