import React, { useContext } from 'react';

import { GameContext } from '../../contexts/GameContext';

const Square = ({ value, index }) => {
  const { squares, setSquares, isXNext, setIsXNext, whoIsWinner, history, setHistory } = useContext(GameContext);

  function handleClick() {
    if (squares[index]) return;
    if(whoIsWinner) return;

    const newSquares = [...squares];
    newSquares[index] = isXNext? 'O' : 'X';
    setSquares(newSquares);
    setIsXNext(!isXNext);

    setHistory([
      ...history, 
      {
        squares: [...squares],
        isNext: !isXNext,
        whoIsWinner,
    }]);
  }

  return (
    <button type="button" onClick={handleClick}>
      {value}
    </button>
  );
};

export default Square;
