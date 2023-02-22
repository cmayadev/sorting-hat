import { useState } from 'react'

import House from './House';
import Question from './Question';

const Quizz = ({questionList}) => {

    const [step, setStep] = useState(1);
    const [result, setResult] = useState('');

    const [scores, setScores] = useState({
        Gryffindor: 0,
        Hufflepuff: 0,
        Ravenclaw: 0,
        Slytherin: 0
    });

    const [currentQuestion, setCurrentQuestion] = useState(questionList[0]);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const handleStep = () => {
        if (selectedAnswer !== null) {
            const randomQuestion = questionList[step];
            setCurrentQuestion(randomQuestion);
            setStep(step + 1);
            setSelectedAnswer(null);
        }
    }

    const handleFinish = () => {
        setResult(Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b))
    }

    return ( 
        result ?
            <House result={result} scores={scores} />
        :
        <>
            <h2>Pregunta {step} de {questionList.length}</h2>
            <div>
                <Question question={currentQuestion.question} answers={currentQuestion.answers} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} scores={scores} setScores={setScores} />
            </div>
            <br/>
            <div>
                {
                    step < questionList.length 
                        ? <button disabled={!selectedAnswer} onClick={handleStep}>Next</button> 
                        : <button onClick={handleFinish}>Finish</button>
                }
            </div>
        </>
    );
}

export default Quizz;
