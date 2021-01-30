import { useContext } from 'react';
import '../../App.css'
import { GameStateContext } from '../../helpers/Contexts'

function Menu(){

    const { gameState,setState,userName,setUserName } = useContext(GameStateContext);

    return (
        <div className="Menu" >

            <label> Enter Your Name: </label>
            <input onChange={ e => { setUserName(e.target.value) } } type="text" placeholder="Your Name"/>

            <button onClick={ () => { setState('playing') } }> Start Quiz </button>

        </div>
    )
}

export default Menu;

