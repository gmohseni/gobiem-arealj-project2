import React from 'react';
import './App.css';
// import {Shapes} from './components/Shapes';
// import Card from "./components/Card";
import HomePage from './components/HomePage';

export default function App() {
  ////const [state, dispatch] = useContext(GameContext);

    return (
      
      < div>
      <HomePage/>
      </div>
      
      // <div className="row">
      //   {
      //     Shapes.map((shape) => 
      //       <div className="col py-5">
      //         <Card type={shape.url}/>
      //       </div>
      //     )
      //   }
      // </div>
    );
}
