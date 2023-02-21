import { useState } from 'react'

import Question from './Question';

import questionList from '../api/data.json';

const Quizz = () => {

    const [step, setStep] = useState(1);
    const [house, setHouse] = useState('');
    const [questions, setQuestions] = useState(questionList);

    const [scores, setScores] = useState({
        Gryffindor: 0,
        Hufflepuff: 0,
        Ravenclaw: 0,
        Slytherin: 0
    });

    const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const handleStep = () => {
        if (selectedAnswer !== null) {
            const randomQuestion = questions[step];
            setCurrentQuestion(randomQuestion);
            setStep(step + 1);
            setSelectedAnswer(null);
        }
    }

    const handleFinish = () => {
        setHouse(Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b))
    }

    return ( 
        house ?
            <h2>{house}</h2> 
        :
        <>
            <h2>Paso {step} de {questionList.length}</h2>
            <div>
            <Question question={currentQuestion.question} answers={currentQuestion.answers} setSelectedAnswer={setSelectedAnswer} scores={scores} setScores={setScores} />
            </div>
            <br/>
            <div>
            {step < questionList.length ?
                <button disabled={!selectedAnswer} onClick={handleStep}>Next</button> :
                <button onClick={handleFinish}>Finish</button>
            }
            </div>
        </>
    );
}

export default Quizz;
