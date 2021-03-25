import React, { useContext, useEffect, useState} from 'react';
import {GameContext} from './GameContext';
import '../styles/style.css';

export default function Board(){
    const [state, dispatch] = useContext(GameContext);
    const [alert, setAlert] = useState(<div></div>);

    useEffect(() => {
        if (state.showAlert && state.alertColor === "success") {
            console.log("is it updating??");
            setAlert(<div className="alert alert-success" role="alert">Congrats! You have found a set.</div>);
            updateAlert();
        } else if (state.showAlert && state.alertColor === "danger") {
            console.log("is it updating??");
            setAlert(<div className="alert alert-danger" role="alert">Sorry! This is not a set.</div>);
            updateAlert();
        }
    },[dispatch, state.showAlert, state.alertColor]);

    const updateAlert = () => {
        dispatch({type: "RESET_ALERT"});
    }

    return (
        <div>
            <div className="boardContainer">
                <div>{alert}</div>
                <div className="board">{state.board}</div>
            </div>
        </div>
    )
}
