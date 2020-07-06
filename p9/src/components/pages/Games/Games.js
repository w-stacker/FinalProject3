import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom'

class Games extends Component {
    render() {
        return (
            <div className="gameLinks">
                <Link to="/TetrisGame" style={linkStyle}>Tetris</Link>

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
