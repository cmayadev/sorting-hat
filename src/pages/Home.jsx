import { Link } from "react-router-dom";

import Button from "../components/Button";

const Home = () => {
    return ( 
        <div className="hero">
            <div className="slogan">
                <div className="heading">
                    <span>Sorting ceremony</span>
                    <h1>Discover your Hogwarts House</h1>
                </div>
                <div className="shields">
                    <img src="./gryffindor_min.svg" alt="Gryffindor Shield" />
                    <img src="./ravenclaw_min.svg" alt="Ravenclaw Shield" />
                    <img src="./slytherin_min.svg" alt="Slytherin Shield" />
                    <img src="./hufflepuff_min.svg" alt="Hufflepuff Shield" />
                </div>
                <Link to="/sorting">
                    <Button>Get sorted now</Button>
                </Link>
            </div>
            <div className="hat">
                <img src="./hat.webp" alt="Sorting Hat" />
            </div>
        </div>
    );
}

export default Home;