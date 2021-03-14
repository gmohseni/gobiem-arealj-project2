import React from 'react';

export default class Card extends React.Component {
    render() {
        return (
            <div>
                <div className="card border-info" style={{width:"100px", height:"230px"}}>
                    <img src={this.props.type} alt="card"/>
                </div>
            </div>
        )
    }
}
