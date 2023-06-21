import React, { useContext } from "react";

import { GameContext } from '../../contexts/GameContext'
import './style.css'

const Reset = () => {
    const { setSquares, setIsXNext, setWhoIsWinner, setHistory, setCount } = useContext(GameContext);

    function handleClick() {
        setSquares(Array(9).fill(null))
        setIsXNext(false);
        setWhoIsWinner('');
        const newHistory = [];
        setHistory(newHistory);
        setCount(-1)
    }

    return (
        <div className="button-reset">
            <button type="button" onClick={handleClick}> Reiniciar </button>
        </div>
    );
}

export default Reset;
