import React, {  useContext } from 'react';
import { Link } from 'react-router-dom'
import { UserContext } from '../../../UserContext';


const Games = () => {
    let msg = useContext(UserContext)
     
    return (
        <div className="container">
            <div className="usercontext">{msg}</div>
            <div className="gameLinks">
                <ul>
                    <li>
                        <Link to="/TetrisGame" style={linkStyle}>Tetris</Link>
                    </li>    
                    <li>
                        <Link to="/Hangman" style={linkStyle}>Hangman</Link>
                    </li>
                    <li>
                        <Link to="/Minesweeper" style={linkStyle}>Minesweeper</Link>
                    </li>
                </ul>   
            </div>
        </div>
    )
}

const linkStyle = {
    color: "black",
    textAlign: 'center',
    textDecoration: 'none'
}

export default Games
