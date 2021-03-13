import React, { useContext, useReducer, useState} from 'react';
import {GameContext} from './GameContext';



export default function HomePage() {
    const [state, dispatch] = useContext(GameContext);
    
    const [difficulty, updateDifficulty] = useState("EASY");
    
    function setDifficulty(e) {
        updateDifficulty(e.target.value);
        console.log(difficulty);
      }

     const chooseLevel = () => {
        if (difficulty === "EASY"){
            dispatch({type:"EASY", payload: difficulty.current.value});
           
        } else if (difficulty === "MEDIUM"){
            dispatch({type:"MEDIUM", payload:difficulty.current.value});
        }
        else if (difficulty === "HARD"){
         dispatch({type:"HARD", payload: difficulty.current.value});
    }
    }
    
        return (
            <div>
                <h1>Welcome to the Game!</h1>

                <h3>Choose Difficulty of the Set Game</h3>
                <label htmlFor="difficulty" className="form-label">
                <select name="difficulty" id="difficulty" className="form-select" onChange={e => setDifficulty(e)}>
                <option>EASY</option>
                <option>MEDIUM</option>
                <option>HARD</option>

                    </select>
                    </label>

                <button onClick={chooseLevel} type="submit">Set Level</button>


            </div>
        )
    }

