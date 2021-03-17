import React, { useContext, useEffect} from 'react';
import {GameContext} from './GameContext';
import Board from './Board';
import '../styles/style.css';

export default function Game() {
    const [state, dispatch] = useContext(GameContext);

    useEffect(() => {
        if ((state.difficulty === "HARD") || (state.difficulty === "MEDIUM")){
            dispatch({type:"CREATE_REGULAR_DECK"});
            dispatch({type:"CREATE_BOARD"});
        }
        else if (state.difficulty === "EASY"){
            dispatch({type:"CREATE_EASY_DECK"});
            dispatch({type:"CREATE_BOARD"});
        }
    },[dispatch]);

    return (
       <div>
           <Board/>
       </div>
    )
}
