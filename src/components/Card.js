import {GameContext} from './GameContext';
import React, { useContext} from 'react';


const Card = (props) => {
    const [state, dispatch] = useContext(GameContext);
    
    const handleClick = (cardId) => {
        console.log(state.currentCardSelection);
        if (state.currentCardSelection.length < 3){
            console.log("Hello");
            dispatch({type:"SELECT_CARD", payload: cardId});
        } else {
            alert("You can only select 3 cards!");
        }
    }

        return (
            <div className="py-2">
                <div onClick={() => handleClick(props.id)} className="card" style={{width:"100px", height:"230px"}}>
                    <img src={props.type} alt="card"/>
                </div>
            </div>
        )
    }

    export default Card;


