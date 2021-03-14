import React, { useContext, useState} from 'react';
import {GameContext} from './GameContext';

export default function HomePage() {
    const [difficulty, updateDifficulty] = useState("EASY");
    const [state, dispatch] = useContext(GameContext);
    
    function setDifficulty(e) {
        updateDifficulty(e.target.value);
      }

     const chooseLevel = () => {
        console.log("Choosen difficulty is " + difficulty);
        dispatch({type:"DIFFICULTY", payload: difficulty});
    }
    
        return (
            <div>
                <h1>Welcome!</h1>
                <h3>Choose Your Preferred Difficulty</h3>
                <label htmlFor="difficulty" className="form-label">
                    <select name="difficulty" id="difficulty" className="form-select" onChange={(e) => setDifficulty(e)}>
                        <option>EASY</option>
                        <option>MEDIUM</option>
                        <option>HARD</option>
                    </select>
                </label>
                <div>
                    <button onClick={() => chooseLevel()}>Start the Game</button>
                </div>
            </div>
        )
    }
