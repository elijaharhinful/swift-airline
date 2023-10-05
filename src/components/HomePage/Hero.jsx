import heroImage from "../assets/images/hero.png"



function Hero() {
    return (
        <div className="hero">
            <div className="hero__text">
                <h1>Explore the world with
                    <br></br>
                    our travel expertise!
                </h1>
                <p>We provide unforgettable journeys and adventure to all destinations with <br />
                    our expertly crafted travel experiences across the globe.</p>
                <a className="button" href="#">Book Flight</a>
            </div>
            <div className="hero__image">
                <img src={heroImage} alt="hero-image" />
            </div>
        </div>
    )
}

export default Hero;