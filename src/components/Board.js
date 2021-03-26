import React, { useContext, useEffect, useState} from 'react';
import {GameContext} from './GameContext';
import Alert from './Alert';
import '../styles/style.css';

export default function Board(){
    const [state, dispatch] = useContext(GameContext);
    const [alert, setAlert] = useState(<div></div>);

    useEffect(() => {
        if (state.showAlert && state.alertColor === "success") {
            setAlert(<div className="alert alert-success" role="alert">Congrats! You have found a set.</div>);
            updateAlert();
        } else if (state.showAlert && state.alertColor === "danger") {
            setAlert(<div className="alert alert-danger" role="alert">Sorry! This is not a set.</div>);
            updateAlert();
        }
    },[dispatch, state.showAlert, state.alertColor]);

    const updateAlert = () => {
        setTimeout(function(){
            setAlert(<div></div>);
            dispatch({type: "RESET_ALERT"});
       },3000);
    }

    return (
        <div>
            <div className="boardContainer">
                <Alert alert={alert}/>
                <div className="board">{state.board}</div>
            </div>
        </div>
    )
}
