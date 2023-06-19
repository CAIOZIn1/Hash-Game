import React, { useContext } from 'react';

import { GameContext } from '../../contexts/GameContext';

const Square = ({ value, index }) => {
  const { squares, setSquares } = useContext(GameContext);

  function handleClick() {
    const newSquares = [...squares];
    newSquares[index] = 'X';
    setSquares(newSquares);
  }

  return (
    <button type="button" onClick={handleClick}>
      {value}
    </button>
  );
};

export default Square;
