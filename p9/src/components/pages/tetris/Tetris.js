

const React = require('react');
const Tetris = require('react-tetris');

 
export const TetrisApp = () => (
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
);