import { useState } from 'react';
import './App.css';
import Menu from './components/Menu'
import { GameStateContext } from "./helpers/Contexts";
import Quiz from './components/Quiz'
import EndScreen from './components/EndScreen'

function App() {

  const [gameState,setState] = useState('menu');
  const [userName,setUserName] = useState('');
  const [score,setScore] = useState(0);

  return (
    <div className="App">

      <h1>Quiz</h1>

      <GameStateContext.Provider value={ {  gameState,setState,userName,setUserName,score,setScore} } >


        {gameState === 'menu' && <Menu />}
        {gameState === 'playing' && <Quiz />}
        {gameState === 'finish' && <EndScreen />}

      </GameStateContext.Provider>

    </div>
  );
}

export default App;


 