import React, { useContext, useState } from "react";

import { GameContext } from '../../contexts/GameContext';
import './style.css';

const History = ({ count }) => {
    const {history, setHistory, setSquares, setIsXNext, setAdd, setCount} = useContext(GameContext);

    function handleClick(index){
        setAdd(false);

        if(count > 0){
            setCount(count - 1);
        }

        const newHistory = [...history];
        newHistory.splice(-1, 1);
        setHistory(newHistory);

        setSquares(history[index].squares);
        setIsXNext(history[index].isNext);
    }

    return (
        <div>
            {history.map((data, index) => (
                <div className="history">
                    <button type="button" onClick={() => handleClick(index)}>
                        Voltar para a jogada {count}
                    </button>
                </div>
            ))}
        </div>
    )
}

export default History;
