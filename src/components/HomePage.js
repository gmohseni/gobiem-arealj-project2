import React, { useContext, useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import {GameContext} from './GameContext';

export default function HomePage() {
    const [difficulty, updateDifficulty] = useState("EASY");
    const [state, dispatch] = useContext(GameContext);

     const chooseLevel = () => {
        console.log(difficulty);
        dispatch({type:"DIFFICULTY", payload: difficulty});
    }
    
        return (
            <div>
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
                    <Link exact to={"/game"}>Go!</Link>
                </div>
            </div>
        )
    }
