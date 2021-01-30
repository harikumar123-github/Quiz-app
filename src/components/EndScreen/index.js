import React, { useContext } from 'react'
import '../../App.css'
import { GameStateContext } from '../../helpers/Contexts'
import { Questions } from '../../helpers/Questions'

export default function EndScreen() {


    const { score, setScore , setState, userName} = useContext(GameStateContext)

    const restart = () => {
        setScore(0);
        setState('menu');
    };

    return (
        <div className="EndScreen">
            <h3> Quiz Finished </h3>

            <h2> {userName}, your score is: </h2>

            <h1> {score} / {Questions.length} </h1>

            <button onClick={restart}> Restart </button>

        </div>
    )
}


