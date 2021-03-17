import React, { useContext, useEffect} from 'react';
import {GameContext} from './GameContext';
import '../styles/style.css';

export default function Board(){
    const [state, dispatch] = useContext(GameContext);

   
    return (
       <div className="boardContainer">
           <p>Hello</p>
           <div className="board">{state.board}</div>
       </div>
    )
}