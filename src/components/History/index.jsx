import React, { useContext } from "react";

import { GameContext } from '../../contexts/GameContext'

const History = () => {
    const {history, setHisory} = useContext(GameContext);

    return (
        <div>
            {history.map((data, index) => (
                <div>
                    <button>
                        {index}
                    </button>
                </div>
            ))}
        </div>
    )
}

export default History;
