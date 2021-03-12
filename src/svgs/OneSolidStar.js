import React from 'react';

export default class OneSolidStars extends React.Component {
    render() {
        return (
            <div>
                <svg id="svgelem" height="50" width="50">
                    <polygon points="25,2.5 10,45 47.5,15 2.5,15 40,45" fill="red"/>
                </svg>
            </div>
        )
    }
}
