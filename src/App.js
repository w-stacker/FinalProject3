import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Header from './components/Layout/Header'
import Games from './components/pages/Games/Games'
import Home from './components/pages/Home/Home'
import About from '../src/components/pages/About/About'
import TetrisGame from './components/pages/Games/tetris/TetrisApp'
import Hangman from './components/pages/Games/hangman/Hangman'
import SnakeGame from './components/pages/Games/Snake/SnakeGame'
import LoginButton from './components/pages/Login/LoginButton'
import { UserContext } from './UserContext';
import Profile from '../src/components/Profiles/Profiles'
import Minesweeper from './components/pages/Games/minesweeper/minesweeper';


function App() {
  
  return (
    <div className="MineBody">
      <div className="App">
        <div className="container">
          <Header />
            <Switch>
              <UserContext.Provider value="Hello " >
                <Route path="/" exact component={Home} />
                <Route path="/profile" exact component={Profile} />
                <Route path="/Games" exact component={Games}/>
                <Route path="/About" exact component={About}/>
                <Route path='/TetrisGame' exact component={TetrisGame} />
                <Route path='/Minesweeper' exact component={Minesweeper} />
                <Route path='/Hangman' exact component={Hangman} />
                <Route path='/Snake' exact component={SnakeGame} />
                <Route path='/Login' exact component={LoginButton} />
              </UserContext.Provider>
            </Switch>          
        </div>
      </div>
    </div>
  );
}

export default App;
