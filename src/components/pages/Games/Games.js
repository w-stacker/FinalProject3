import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Games extends Component {
    render() {
        return (
            <div className="gameLinks">
                <ul>
                    <li>
                        <Link to="/TetrisGame" style={linkStyle}>Tetris</Link>
                    </li>    
                    <li>
                        <Link to="/Hangman" style={linkStyle}>Hangman</Link>
                    </li>
                </ul>   
            </div>
        )
    }
}

const linkStyle = {
    color: "black",
    textAlign: 'center',
    textDecoration: 'none'
}

export default Games
