import React, { useContext } from "react";

import { GameContext } from '../../contexts/GameContext'

const Reset = () => {
    const context = useContext(GameContext);

    return (
        <>
            Reset
        </>
    )
}

export default Reset;
