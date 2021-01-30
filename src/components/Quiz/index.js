import React, { useContext, useState } from 'react'
import '../../App.css'
import { Questions } from '../../helpers/Questions'
import {GameStateContext } from '../../helpers/Contexts'

export default function Quiz() {

    const { gameState, setState , score,setScore } = useContext(GameStateContext);

    const [currentQues,setCurrentQues] = useState(0);
    const [optionChoosen,setOptionChoosen] = useState('');

    const chooseOption = choosedOption => {
        setOptionChoosen(choosedOption);
    }

    function nextQues() {
        if(Questions[currentQues].answer===optionChoosen)  setScore(score+1);

        setCurrentQues(currentQues+1);
    }

    const finishQuiz = () => {
        if(Questions[currentQues].answer===optionChoosen)  setScore(score+1);
        setState('finish');
    }

    return (
        <div className="Quiz">

            <h3>  {Questions[currentQues].prompt} </h3>

            <div className="options">
                <button onClick={ () => { chooseOption('optionA') } }> {Questions[currentQues].optionA} </button>
                <button onClick={ () => { chooseOption('optionB') } }> {Questions[currentQues].optionB} </button>
                <button onClick={ () => { chooseOption('optionC') } }> {Questions[currentQues].optionC} </button>
                <button onClick={ () => { chooseOption('optionD') } }> {Questions[currentQues].optionD} </button>
            </div>

            <div className="nextq">
                {currentQues == Questions.length-1?
                (<button onClick={finishQuiz} > Finish </button>) :
                (<button onClick={nextQues} > Next </button>) }
            </div>

        </div>
    )
}

