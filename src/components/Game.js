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
    },[dispatch, state.difficulty]);

    const resetGame = () => {
        if ((state.difficulty === "HARD") || (state.difficulty === "MEDIUM")){
            dispatch({type:"CREATE_REGULAR_DECK"});
            dispatch({type:"CREATE_BOARD"});
        }
        else if (state.difficulty === "EASY"){
            dispatch({type:"CREATE_EASY_DECK"});
            dispatch({type:"CREATE_BOARD"});
        }
    }

    return (
       <div>
           <button onClick={() => dispatch({type:"ADD_THREE"})}>Add 3 Cards</button>
           <button onClick={() => resetGame()}>Reset</button>
           <Board/>
       </div>
    )
}
