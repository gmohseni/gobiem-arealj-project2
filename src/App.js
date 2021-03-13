import React, { useContext } from 'react';
import {GameContext} from './components/GameContext';
import './App.css';
import {Shapes} from './components/Shapes';
import Card from "./components/Card";

export default function App() {
  const [state, dispatch] = useContext(GameContext);

    return (
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
