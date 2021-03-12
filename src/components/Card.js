import React from 'react';
import '../styles/shape.css';

export default class Card extends React.Component {

    render() {
        
        return (
            <div className="card-body card-extra" style={{width:"90px", height:"180px"}}>
                
                <img src={this.props.type}/>
            </div>
        )
    }
}
