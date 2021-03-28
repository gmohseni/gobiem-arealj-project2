import {GameContext} from './GameContext';
import React, { useContext, useEffect } from 'react';

const Card = (props) => {
    const [state, dispatch] = useContext(GameContext);
    
    useEffect(() => {
        if (state.isSet === true && state.currentCardSelection.length === 3) {
            dispatch({type:"REMOVE_SET"});
        } else if (state.isSet === false && state.currentCardSelection.length === 3) {
            dispatch({type: "UNSELECT_CARDS"});
        }
    },[dispatch, state.isSet, state.currentCardSelection])
    
    const handleClick = (cardId) => {
        if (state.currentCardSelection.length < 3) {
            dispatch({type:"SELECT_CARD", payload:cardId});
        } else {
            alert("You can only select 3 cards!");
        }
    }
    
        const cardSwitch = (value) => {
            if (value) {
                return <div onClick={() => handleClick(props.id)} className="active-card" style={{width:"80px", height:"210px"}}>
                    <img className="active-img" src={props.type} alt="active-card"/>
                </div>
            } else {
            return <div onClick={() => handleClick(props.id)} className="card" style={{width:"80px", height:"210px"}}>
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


