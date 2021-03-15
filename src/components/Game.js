import React, { useContext, useEffect} from 'react';
import {GameContext} from './GameContext';
import '../styles/style.css';

export default function Game() {
    const [state, dispatch] = useContext(GameContext);

    useEffect(() => {
        if (state.difficulty === "HARD"){
            dispatch({type:"CREATE_REGULAR_DECK"});
        }
    },[]);

    return (
       <div>
           <p>hello</p>
           <p>{state.difficulty}</p>
           <div className="deck">{state.deck}</div>
       </div>
    )
}
