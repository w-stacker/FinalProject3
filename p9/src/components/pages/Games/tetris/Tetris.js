import React, { Component } from 'react'

const Tetris = require('react-tetris')

class TetrisApp extends Component {
   render() {
     return (
       <div>
        <h1>Tetris</h1>
        <Tetris>
          {({ HeldPiece, Gameboard, PieceQueue, points, linesCleared }) => {
            // Render it however you'd like
            return (
              <div>
                <HeldPiece />
                <div>
                  <p>Points: {points}</p>
                  <p>Lines Cleared: {linesCleared}</p>
                </div>
                <Gameboard />
                <PieceQueue />
              </div>
            );
          }}
        </Tetris>
      </div>
     )
   }
}

export default TetrisApp
