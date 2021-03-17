import {GameContext} from './GameContext';
import React, { useContext} from 'react';


export default function Card() {
    const [state, dispatch] = useContext(GameContext);
    
    const handleClick = (cardValue) => {
        if (state.currentCardSelection.length < 3){
            dispatch({type:"SELECT_CARD", payload: cardValue});
        }
        else{
            alert("You can only select 3 cards!");

        }

    }

        return (
            <div className="py-2">
                <div onClick={() => handleClick(props.type)} className="card" style={{width:"100px", height:"230px"}}>
                    {/* can only do this.props.type if it is a class component (changed to function component)  */}
                    <img src={props.type} alt="card"/>
                </div>
            </div>
        )
    }


