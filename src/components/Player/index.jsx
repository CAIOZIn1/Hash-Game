import React, { useContext } from "react";

import { GameContext } from '../../contexts/GameContext'

const Player = () => {
    const context = useContext(GameContext);

    return (
        <>
            Player
        </>
    )
}

export default Player;
