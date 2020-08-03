import React, {useState, useEffect, createContext } from 'react';
import axios from 'axios';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Header from './components/Layout/Header'
import Games from './components/pages/Games/Games'
import Home from './components/pages/Home/Home'
import About from '../src/components/pages/About/About'
import TetrisGame from './components/pages/Games/tetris/TetrisStart'
import SnakeGame from './components/pages/Games/Snake/SnakeGame'
import Game from './components/pages/Games/Tictactoe/Game'
import Playchat from './components/PlayChat/PlayChat'
import LoginButton from './components/pages/Login/LoginButton'
import UserContext from './UserContext'
import Profile from '../src/components/Profiles/Profiles'
import Minesweeper from './components/pages/Games/minesweeper/minesweeper';
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

function App() {

  const [user, setUser] = useState('')

  const newLogin = useAuth0()

  console.log(newLogin)

  useEffect(() => {
    axios.get('http://localhost:3001/api/user', user)
    .then(res => {
        setUser(res.data)
        console.log(res.data)
      }
    )
  }, [] );

  return (
    <div className='MineBody'>
      <div className='App'>
        <div className='container'>
          <Header />

          <Switch>
            <UserContext.Provider value={{user: user}}>
            <Route path="/" exact component={Home} />
                <Route path="/profile" exact   />
                <Route path="/Games" exact component={Games}/>
                <Route path="/About" exact component={About}/>
                <Route path="/Playchat" exact component={Playchat}/>
                <Route path="/Profile" exact component={Profile}/>
                <Route path='/TetrisGame' exact  component={TetrisGame} />
                <Route path='/Minesweeper' exact component={Minesweeper}/>
                <Route path='/Snake' exact component={SnakeGame}/>
                <Route path='/TicTacToe' exact component={Game} />
                <Route path='/Login' exact component={LoginButton} />
            </UserContext.Provider>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;

export { UserContext };
