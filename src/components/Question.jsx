import { useCallback, useEffect, useState } from 'react'

const Question = (props) => {

    const { question, answers, scores, setScores, selectedAnswer, setSelectedAnswer } = props;

    const [shuffledAnswers, setShuffledAnswers] = useState([]);

    useEffect(() => {
        const shuffled = [...answers].sort(() => Math.random() - 0.5);
        setShuffledAnswers(shuffled);
    }, [answers]);

    const handleAnswer =  useCallback(house => {
        const updatedScores = { ...scores };
        updatedScores[house]++;
        setScores(updatedScores);
        setSelectedAnswer(house);
    }, [scores, setScores, setSelectedAnswer]);

    return ( 
        <>
            <h3 className="question-title">{question}</h3>
            <ul className="answers">
                { shuffledAnswers.map(answer =>
                    <li key={Object.keys(answer)[0]} className={selectedAnswer === Object.values(answer)[0] ? 'active' : ''} onClick={() => handleAnswer(Object.values(answer)[0])}>
                        {Object.keys(answer)[0]}
                    </li>
                ) }
            </ul>
        </>
    );
}

export default Question;