import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Layout/Header'
import Games from './components/pages/Games/Games'
import Home from './components/pages/Home/Home'
import About from './components/pages/About/About'
import TetrisGame from './components/pages/Games/tetris/TetrisGame'
import Hangman from './components/pages/Games/hangman/Hangman'
import Login from './components/pages/Login/Login'

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/Games" exact component={Games}/>
              <Route path="/About" exact component={About}/>
              <Route path='/TetrisGame' exact component={TetrisGame} />
              <Route path='/Hangman' exact component={Hangman} />
              <Route path='/Login' exact component={Login} />
            </Switch>          
        </div>
      </div>
    </Router>
  );
}

export default App;
