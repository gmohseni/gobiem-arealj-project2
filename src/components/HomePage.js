import React, { useContext, useState} from 'react';
import {Link} from "react-router-dom";
import {GameContext} from './GameContext';
import NavBar from './NavBar';

export default function HomePage() {
    const [difficulty, updateDifficulty] = useState("EASY");
    const [state, dispatch] = useContext(GameContext);

     const chooseLevel = () => {
        dispatch({type:"DIFFICULTY", payload: difficulty});
    }
    
        return (
            <div>
                <NavBar/>
                <h1>Welcome!</h1>
                <h3>Choose Your Preferred Difficulty</h3>
                <label htmlFor="difficulty" className="form-label">
                    <select name="difficulty" id="difficulty" className="form-select" onChange={(e) => updateDifficulty(e.target.value)}>
                        <option>EASY</option>
                        <option>MEDIUM</option>
                        <option>HARD</option>
                    </select>
                </label>
                <div>
                    <button onClick={() => chooseLevel()}>Set Level</button>
                </div>
                <div>
                    <Link to={"/game"}>Go!</Link>
                </div>
            </div>
        )
    }
