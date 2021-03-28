import React from 'react';
import '../styles/style.css';

export default function Alert(props) {
    return (
        <div>
            <div>{props.alert}</div>
        </div>
    )
}
