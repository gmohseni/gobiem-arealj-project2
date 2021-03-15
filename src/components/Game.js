import React, { useContext, useEffect} from 'react';
import {GameContext} from './GameContext';

export default function Game() {
    const [state, dispatch] = useContext(GameContext);


    // useEffect(() => {
    //     if (state.difficulty === "HARD"){
    //         console.log(state.difficulty);
    //         dispatch({type:"CREATE_REGULAR_DECK"});
    //     }
        
    
    // },[state, dispatch]
    // );


    const makeDeck = () =>{
        if (state.difficulty === "HARD"){
            console.log(state.difficulty);
            dispatch({type:"CREATE_REGULAR_DECK"});
        }
    }

 
   
    

    return (
       <div>
           <p>hello</p>
           <div>
           {makeDeck}
           </div>
       </div>
    )
}
