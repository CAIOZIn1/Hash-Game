import './Home.css'

import GameContextProvider from '../contexts/GameContext'
import Board from '../components/Board'

function Home() {
  return (
    <GameContextProvider>
      <Board />
    </GameContextProvider>
  )
}

export default Home
