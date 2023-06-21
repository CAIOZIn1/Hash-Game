import React, { useContext, useEffect, useState } from "react";

import { GameContext } from '../../contexts/GameContext';

import Square from "../Square";
import Player from "../Player";
import Reset from "../Reset";
import calculateWinner from "../../utils/calculeteWinner";
import Winner from "../Winner";
import History from "../History";

const Board = () => {
    const {squares, setWhoIsWinner, count, setCount, add, setAdd} = useContext(GameContext);


    useEffect(() => {
        const winner = calculateWinner(squares);

        if(add){
            setCount(count + 1);
        }

        setAdd(true);

        if(winner){
            setWhoIsWinner(winner);
        }
    }, [setWhoIsWinner, squares]);

    return (
        <div className="board-container">
            <Player />
            <Winner />
            <div className="board">
                {squares.map((value, index) => (
                    <Square value={value} index={index} key={index}/>
                ))}
            </div>
            <Reset />
            <History count={count} />
        </div>
    );
}

export default Board;
