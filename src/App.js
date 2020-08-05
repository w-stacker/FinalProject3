import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import { Switch, Route } from 'react-router-dom'
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
    <div className='MineBody'>
      <div className='App'>
        <div className='container'>
          <Header />
          <UserContext.Provider value={{user: user}}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/profile" exact component={Profile} />
              <Route path="/Games" exact component={Games} />
              <Route path="/About" exact component={About} />
              <Route path='/TetrisGame' exact component={TetrisGame} />
              <Route path='/Minesweeper' exact component={Minesweeper} />
              <Route path='/Snake' exact component={SnakeGame} />
              <Route path='/TicTacToe' exact component={Game} />
              <Route path='/Login' exact component={LoginButton} />
            </Switch>
          </UserContext.Provider>
        </div>
      </div>
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

