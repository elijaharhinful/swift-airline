import passport from "../assets/images/passport.png";
import inPlane from "../assets/images/in-plane.png";
import inPlaneDark from "../assets/images/inplane-dark.png"

function Services() {
    return (
        <div className="services content">
            <div className="services__title">
                <h2 className="section__title">Our Services</h2>
                <h4 className="section__subtitle">We provide world class services just for you.</h4>
            </div>
            <div className="services__body">
                <div className="services__content">
                    <div className="services__image">
                        <img src={passport} alt="passport" />
                    </div>
                    <div className="services__body-text">
                        <h4>Flight Bookings</h4>
                        <p>
                            Policies and procedures for modifying or cancelling bookings are <br />
                            provided and reservation of seats inclusive.
                        </p>
                        <a href="#" className="button">Read more</a>
                    </div>
                </div>

                <div className="services__content middle">
                    <div className="services__body-text">
                        <h4>In Flight Services</h4>
                        <p>
                            Provision of medicals services,meals,and cabin crew <br />
                            assistance for passengers and those with disabilities,infants or <br />
                            special dietary require,ent
                        </p>
                        <a href="#" className="button">Read more</a>
                    </div>
                    <div className="services__image image__middle">
                        <img src={inPlane} alt="pilot" />
                    </div>
                </div>

                <div className="services__content">
                    <div className="services__image">
                        <img src={inPlaneDark} alt="in-plane-dark" />
                    </div>
                    <div className="services__body-text">
                        <h4>In Flight Entertainment</h4>
                        <p>
                            Entertainment  options such as movies, games, audio books, and <br />
                            magazines are provided during the flight to keep you alert and pleased
                        </p>
                        <a href="#" className="button">Read more</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;