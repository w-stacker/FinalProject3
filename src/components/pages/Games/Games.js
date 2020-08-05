import React from 'react';
import { Link } from 'react-router-dom'
import "./Games.css";
// import { UserContext } from './../../../UserContext';


const Games = () => {
    // let msg = useContext(UserContext)
     
    return (
        <div className="container">
            {/* <div className="usercontext">{msg}</div> */}
            <div className="gameLinks">
                <ul>
                    <h1>
                        <Link to="/TetrisGame" style={linkStyle}>Tetris</Link>
                        <h4 className="h4">Enjoy the timeless classic build in react</h4>
                    </h1>    
                    <h1>
                        <Link to="/Snake" style={linkStyle}>Snake</Link>
                        <h4 className="h4">Play a simple game of snake in the comfort of your browser</h4>
                    </h1>
                    <h1>
                        <Link to="/TicTacToe" style={linkStyle}>Tic Tac Toe</Link>
                        <h4 className="h4">Grab a friend and play a simple game of Tic Tac Toe together</h4>
                    </h1>
                    <h1>
                        <Link to="/Minesweeper" style={linkStyle}>Minesweeper</Link>
                        <h4 className="h4">Partake in a timeless computer classic</h4>
                    </h1>
                </ul>   
            </div>
        </div>
    )
}

const linkStyle = {
  color: "black",
  textAlign: "center",
  textDecoration: "none",
};

export default Games;
