import houses from '../api/houses.json';

const House = (props) => {

    const houseData = houses.find((house) => house.name === props.result);
    const { name, slug, quote } = houseData;

    const totalScore = Object.values(props.scores).reduce((a, b) => a + b, 0);

    const percentageScores = Object.entries(props.scores).map(([house, score]) => {
        const percentage = Math.round((score / totalScore) * 100);
        return { house, percentage };
    });

    fetch(`https://hp-api.onrender.com/api/characters/house/${slug}`)
    .then((response) => response.json())  
    .then((characters) => {
        const filteredCharacters = characters.filter((character) => character.image !== "");
        const randomCharacters = filteredCharacters.sort(() => 0.5 - Math.random()).slice(0, 4);
        console.log(randomCharacters);
    });

    return ( 
        <div className="house">
            <div className="result">
                <img src={`${slug}.webp`} alt="" />
                <h2>{name}</h2>
                <em>"{quote}"</em>
            </div>
            <div className="scores">
                <h3>Your result</h3>
                {percentageScores.map(({ house, percentage }) => (
                    <div key={house} className="score">
                        <h4>{house}</h4>
                        <progress className={`progress ${house}`} value={percentage} max="100">{percentage}%</progress>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default House;