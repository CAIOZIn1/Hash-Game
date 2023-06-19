import React, { useContext } from "react";

import { GameContext } from '../../contexts/GameContext'

const Winner = () => {
    const context = useContext(GameContext);

    return (
        <>
            Winner
        </>
    )
}

export default Winner;
