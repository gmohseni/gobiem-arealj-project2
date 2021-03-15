import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import {GameContextComponent} from './components/GameContext';
import App from './App';
import Home from "./components/HomePage";
import Game from "./components/Game";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  <GameContextComponent>
  <Router>
    <Switch>
      <Route exact path={"/"} component={App}/>
      <Route exact path={"/home"} component={Home}/>
      <Route exact path={"/game"} component={Game}/>
      <Route render={() => <h1>Not found!</h1>} />
    </Switch>
  </Router>
  </GameContextComponent>
  ,document.getElementById('root')
);
