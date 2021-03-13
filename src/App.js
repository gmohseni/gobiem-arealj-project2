import React, { useContext } from 'react';
import './App.css';
import {Shapes} from './components/Shapes';
import {GameContext} from './components/GameContext';
import Card from "./components/Card";

// const CardsContext = React.createContext(generateCards(Shapes));
//const [state, dispatch] = useContext(GameContext);

export default class App extends React.Component {

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
        {
          Shapes.map((shape) => 
            <div className="col py-5">
              <Card type={shape.url}/>
            </div>
          )
        }
      </div>
    )
  }
}
