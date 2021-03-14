import React from 'react';

export default class Card extends React.Component {
    render() {
        return (
            <div className="gy-4">
                <div className="card border-info" style={{width:"100px", height:"300px"}}>
                    <img src={this.props.type} alt="card"/>
                </div>
            </div>
        )
    }
}
