import React, { useContext, useState } from "react";

import { GameContext } from '../../contexts/GameContext';
import './style.css';

const History = ({ count }) => {
    const {squares, history, setHistory, setSquares, setIsXNext, setAdd, setCount, setWhoIsWinner} = useContext(GameContext);

    function handleClick(index){
        setAdd(false);
        setCount(count - 1);

        const newHistory = [...history];
        newHistory.splice(-1, 1);
        setHistory(newHistory);

        setSquares(history[index].squares);
        setIsXNext(!(history[index].isNext));
        setWhoIsWinner(history[index].whoIsWinner);
    }

    return (
        <div>
            {history.map((data, index) => (
                <div className="history" key={index}>
                    <button type="button" onClick={() => handleClick(index)}>
                        Voltar para a jogada {count}
                    </button>
                </div>
            ))}
        </div>
    )
}

export default History;
