import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom'
import Header from './components/Layout/Header'
import Games from './components/pages/Games/Games'
import Home from './components/pages/Home/Home'
import About from './components/pages/About/About'
import TetrisGame from './components/pages/Games/tetris/TetrisStart'
import SnakeGame from './components/pages/Games/Snake/SnakeGame'
import Game from './components/pages/Games/Tictactoe/Game'
import LoginButton from './components/pages/Login/LoginButton'
import Profile from './components/Profiles/Profiles'
import Minesweeper from './components/pages/Games/minesweeper/minesweeper';
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import UserContext from './Utils/UserContext';

function App() {
  const [user, setUser] = useState('')

  useEffect(() => {
      axios.get('http://localhost:3001/api/user', user)
      .then(res => {
          setUser(res.data)
          console.log(res.data)
        }
      )
    }, [] )

  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">!PLAY</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="/games">Games</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/profile">Log In</a>
            </li>
          </ul>
        </div>
      </nav>
      {/* <Header className="" /> */}
      <UserContext.Provider value={{user: user}}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" exact component={Profile} className="Profile" />
          <Route path="/Games" exact component={Games} className="Games" />
          <Route path="/About" exact component={About} className="About" />
          <Route path='/TetrisGame' exact component={TetrisGame} className="Tetris"/>
          <Route path='/Minesweeper' exact component={Minesweeper} className="Minesweeper" />
          <Route path='/Snake' exact component={SnakeGame} className="SnakeGame" />
          <Route path='/TicTacToe' exact component={Game} className="TicTac" />
          <Route path='/Login' exact component={LoginButton} className="Tetris" />
        </Switch>
      </UserContext.Provider>
    </div>
  );
}

export default App;

// export { UserContext };





// <Route path="/" exact component={Home} />
//               <Route path="/profile" exact render={()=><Profile updatedUser={updateUser}/>}  />
//               <Route path="/Games" exact component={Games}/>
//               <Route path="/About" exact component={About}/>
//               <Route path='/TetrisGame' exact render={()=><TetrisGame tetrisUser={loggedInUser} />} />
//               <Route path='/Minesweeper' exact render={()=><Minesweeper minesweeperUser={loggedInUser} />} />
//               <Route path='/Snake' exact render={()=><SnakeGame snakeUser={loggedInUser} />} />
//               <Route path='/TicTacToe' exact component={Game} />
//               <Route path='/Login' exact component={LoginButton} />

