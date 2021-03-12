import React from 'react';
import './App.css';
import Card from "./components/Card";
import {Shapes} from './components/Shapes';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        cards: ["ThreeSolidStars", "TwoSolidStars", "OneSolidStar"],
        deck: {}
    }
  }

  render() {
    return (
      // <div className="row">
      //   {this.state.cards.map(([index]) => {
      //     return (
      //       this.state.deck.push(<Card type={this.state.cards.find(index)}/>)
      //     )
      //   })
      //   }
      // </div>
      <div className="row">
        <div className="col py-2">
          <Card type={Shapes[0].url} quantity={3}/>
        </div>
      </div>
    )
  }
}
