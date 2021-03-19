import {GameContext} from './GameContext';
import React, { useContext, useEffect} from 'react';


const Card = (props) => {
    const [state, dispatch] = useContext(GameContext);
    
    
    useEffect(() => {
        console.log(state.currentCardSelection + "aaa");
        // console.log(state.isSet);
        console.log(state.currentCardSelection.length);
        if (state.currentCardSelection.length === 3){
            setDispatch();
            console.log("dispatchSet")
            waitIsSet();
        }
        
        

    },[state])
    
    const handleClick = (cardId) => {
        if (state.currentCardSelection.length < 2){
            dispatch({type:"SELECT_CARD", payload:cardId});
        }
        else if(state.currentCardSelection.length === 2){
            dispatch({type:"SELECT_CARD", payload:cardId});
            // dispatch({type:"CHECK_SET"});
            // setDispatch();
            // waitIsSet();
            // console.log("two");
            // console.log(state.isSet);

        }
        else{
            alert("You can only select 3 cards!");
        }
    }

    const waitIsSet  = () => {
        console.log(state.currentCardSelection);
        if (state.isSet){
                // alert("Congrats, You got a Set!");
                dispatch({type:"REMOVE_SET"});
                // console.log(state.currentCardSelection);
                dispatch({type:"ADD_THREE"});
                // console.log("hello2");
                
            }

    }

   const setDispatch = () => {
        dispatch({type:"CHECK_SET"});
        // console.log(state.isSet);
        // console.log("hello");
    };
    


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


