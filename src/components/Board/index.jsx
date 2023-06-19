import React, { useContext } from "react";

import { GameContext } from '../../contexts/GameContext'
import Square from "../Square";

const Board = () => {
    const {squares} = useContext(GameContext);

    return (
        <div className="board-container">
            <div className="board">
                {squares.map((value, index) => (
                    <Square value={value} index={index} key={index}/>
                ))}
            </div>
        </div>
    )
}

export default Board;
