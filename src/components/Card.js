import {GameContext} from './GameContext';
import React, { useContext, useEffect, useState} from 'react';


const Card = (props) => {
    const [state, dispatch] = useContext(GameContext);
    const [iterateOnce, setIterateOnce] = useState(false);
    
    useEffect(() => {
        if (state.isSet === true && iterateOnce === true){
            alert("Congrats! You have a set.");
            dispatch({type:"REMOVE_SET"});
            setIterateOnce(false);
        } else if (state.isSet === false && iterateOnce === true) {
            alert("Sorry! This is not a set.");
            dispatch({type: "UNSELECT_CARDS"});
            setIterateOnce(false);
        }
    },[dispatch, state.isSet, iterateOnce])
    
    const handleClick = (cardId) => {
        if (state.currentCardSelection.length < 2){
            dispatch({type:"SELECT_CARD", payload:cardId});
        }
        else if(state.currentCardSelection.length === 2){
            dispatch({type:"SELECT_CARD", payload:cardId});
            dispatch({type:"CHECK_SET"});
            setIterateOnce(true);
        }
        else{
            alert("You can only select 3 cards!");
        }
    }
    
        const cardSwitch = (value) => {
            if (value) {
                return <div onClick={() => handleClick(props.id)} className="activeCard" style={{width:"100px", height:"230px"}}>
                    <img className="activeImg" src={props.type} alt="activeCard"/>
                </div>
            } else {
            return <div onClick={() => handleClick(props.id)} className="card" style={{width:"100px", height:"230px"}}>
                    <img src={props.type} alt="card"/>
                </div>
            }
        }

        return (
            <div className="py-2">
                {cardSwitch(props.value)}
            </div>
        )}

    export default Card;


