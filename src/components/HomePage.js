import React, { useContext, useState} from 'react';
import {Link} from "react-router-dom";
import {GameContext} from './GameContext';
import NavBar from './NavBar';
import example2 from '../imgs/example2.png';

export default function HomePage() {
    const [difficulty, updateDifficulty] = useState("EASY");
    const [state, dispatch] = useContext(GameContext);

    const chooseLevel = () => {
        dispatch({type: "RESET"});
        dispatch({type:"DIFFICULTY", payload: difficulty});
    }
        return (
            <div>
                <div>
                    <NavBar/>
                </div>
                <div className="container-fluid background">
                    <div className="row top-padding">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4 text-center">
                            <h1>Welcome!</h1>
                        </div>
                        <div className="col-sm-4"></div>
                    </div>
                    <div className="row home-img-container">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-10 text-center">
                            <div>
                                <img className="set-img" src={example2} style={{height: "300px"}} alt="example2"/>
                            </div>
                        </div>
                        <div className="col-sm-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3"></div>
                        <div className="col-sm-6 text-center col-padding">
                            <h3>Choose Your Preferred Difficulty</h3>
                        </div>
                        <div className="col-sm-3"></div>
                    </div>
                    <div className="row difficulty-padding">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4 text-center">
                            <label htmlFor="difficulty" className="form-label">
                                <select name="difficulty" id="difficulty" className="form-select difficulty-options" onChange={(e) => updateDifficulty(e.target.value)}>
                                    <option>EASY</option>
                                    <option>MEDIUM</option>
                                    <option>HARD</option>
                                </select>
                            </label>
                        </div>
                        <div className="col-sm-4"></div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4 text-center">
                            <button className="button go-button" onClick={() => chooseLevel()}>Set Level</button>
                        </div>
                        <div className="col-sm-4"></div>
                    </div>
                    <div className="row row-padding">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4 text-center">
                            <h5>Please press go to start the game.</h5>
                            <Link to={"/game"} style={{textDecoration: "none", color: "white"}}>
                                <button className="button go-button">Go!</button>
                            </Link>
                        </div>
                        <div className="col-sm-4"></div>
                    </div>
                </div>
            </div>
        )
    }
