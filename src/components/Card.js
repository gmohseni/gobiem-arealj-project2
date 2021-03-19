import {GameContext} from './GameContext';
import React, { useContext} from 'react';


const Card = (props) => {
    const [state, dispatch] = useContext(GameContext);
    
    const handleClick = (cardId) => {
        if (state.currentCardSelection.length < 3){
            dispatch({type:"SELECT_CARD", payload:cardId});
        }
        else if(state.currentCardSelection.length === 3){
            dispatch({type:"CHECK_SET"});

        }
        
        
        
        // if (state.currentCardSelection.length < 3){
        //     dispatch({type:"SELECT_CARD", payload: cardId});
        // } else {
        //     alert("You can only select 3 cards!");
        // }
    }

    const cardSwitch = (value) => {
        if (value) {
            return <div onClick={() => handleClick(props.id)} className="activeCard" style={{width:"100px", height:"230px"}}>
                <img className="activeImg" src={props.type} alt="activeCard"/>
            </div>

        }
        else{
           return <div onClick={() => handleClick(props.id)} className="card" style={{width:"100px", height:"230px"}}>
                <img src={props.type} alt="card"/>
            </div>
       

        }
    }

        return (
           
            
            <div className="py-2">
                {cardSwitch(props.value)}
            </div>
        )
        }

    export default Card;


