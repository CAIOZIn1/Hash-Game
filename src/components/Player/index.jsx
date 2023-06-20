import React, { useContext } from "react";

import { GameContext } from '../../contexts/GameContext';
import './style.css'

const Player = () => {
    const { isXNext } = useContext(GameContext);

    return (
        <>
            <h1>Player: {isXNext? 'O' : 'X'}</h1>
        </>
    );
}

export default Player;
