import { useCallback } from 'react'

const Question = (props) => {

    const { question, answers, scores, setScores, setSelectedAnswer } = props;

    const handleAnswer =  useCallback(house => {
        const updatedScores = { ...scores };
        updatedScores[house]++;
        setScores(updatedScores);
        setSelectedAnswer(house);
    });

    return ( 
        <>
            <span>{question}</span>
            <ul className="answers">
                {
                    answers.map(answer =>
                    <li key={Object.keys(answer)[0]} onClick={() => handleAnswer(Object.values(answer)[0])}>
                        {Object.keys(answer)[0]}
                    </li>
                    )
                }
            </ul>
        </>
    );
}

export default Question;