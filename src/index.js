import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import {GameContextComponent} from './components/GameContext';

ReactDOM.render(
  <GameContextComponent>
    <App />
  </GameContextComponent>
  ,document.getElementById('root')
);
