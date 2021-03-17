import React, { useContext} from 'react';
import {GameContext} from './GameContext';
import '../styles/style.css';

export default function Board(){
    const [state, dispatch] = useContext(GameContext);

    return (
       <div className="boardContainer">
           <div className="board">{state.board}</div>
       </div>
    )
}
