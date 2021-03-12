import React from 'react';
import '../styles/shape.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "./Card";



export default class Shape extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            color: null,
            quantity: 0,
            shading: null,
            highlighted: false,
        }
    }

    render() {
        return (

        //     <div className="card-body bg-dark" style={{width:"15rem", height:"10rem"}}> 
        //     <div className="pacman"></div>
        //   </div>
        <div>
        
          <Card>
              <div className="pacman"></div>

              </Card>
        
        
        </div>
       

        )
    }
}



