import React, { useContext } from "react";

import { GameContext } from '../../contexts/GameContext'
import './style.css'

const Winner = () => {
    const { whoIsWinner, isXNext } = useContext(GameContext);

    if(!whoIsWinner) return <></>
    return(
        <div className="frame">
            <p className="winner">
                "{isXNext ? 'X' : 'Bolinha'}" Ganhou!
            </p>
        </div>
    );
}

export default Winner;
