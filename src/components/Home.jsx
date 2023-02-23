import Button from "./Button";

const Home = () => {
    return ( 
        <div className="hero">
            <div className="slogan">
                <h1>Discover your Hogwarts House</h1>
                <div className="shields">
                    <img src="./gryffindor_min.svg" alt="Gryffindor Shield" />
                    <img src="./ravenclaw_min.svg" alt="Ravenclaw Shield" />
                    <img src="./slytherin_min.svg" alt="Slytherin Shield" />
                    <img src="./hufflepuff_min.svg" alt="Hufflepuff Shield" />
                </div>
                <Button>Get sorted now</Button>
            </div>
            <div className="hat">
                <img src="./hat.webp" alt="Sorting Hat" />
            </div>
        </div>
    );
}

export default Home;