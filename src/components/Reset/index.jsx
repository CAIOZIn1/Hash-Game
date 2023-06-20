import React, { useContext } from "react";

import { GameContext } from '../../contexts/GameContext'
import './style.css'

const Reset = () => {
    const { setSquares, setIsXNext, setWhoIsWinner } = useContext(GameContext);

    function handleClick() {
        setSquares(Array(9).fill(null))
        setIsXNext(false);
        setWhoIsWinner('');
    }

    return (
        <div className="button-reset">
            <button type="button" onClick={handleClick}> Reiniciar </button>
        </div>
    );
}

export default Reset;
