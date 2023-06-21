import React, {createContext, useState} from "react";

export const GameContext = createContext();

const GameContextProvider = ({ children }) => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(false);
    const [whoIsWinner, setWhoIsWinner] = useState('');
    const [history, setHistory] = useState([]);
    const [count, setCount] = useState(-1);
    const [add, setAdd] = useState(true);

    const state = {
        squares,
        setSquares,
        isXNext,
        setIsXNext,
        whoIsWinner,
        setWhoIsWinner,
        history,
        setHistory,
        count,
        setCount,
        add,
        setAdd
    };
    
    return (
    <GameContext.Provider value={state}>{children}</GameContext.Provider>
    );
}

export default GameContextProvider;