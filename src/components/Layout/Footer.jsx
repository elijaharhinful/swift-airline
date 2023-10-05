import logo from "../assets/logos/swift-airline.svg";
import facebook from "../assets/icons/Facebook.svg";
import twitter from "../assets/icons/Twitter.svg";
import LinkedIn from "../assets/icons/LinkedIn.svg";


function Footer() {
    return (
        <div className="footer">
            <div className="footer__logo-content">
                <h3><i>Swift Airline</i></h3>
                <p>
                    Providing  unforgettable journeys and adventure <br />
                    to all destinations with our expertly crafted <br />
                    travel experiences across the globe.
                </p>
                <p className="child-2">Connect with us on our social media platforms</p>
                <div className="footer__socials">
                    <img src={twitter} alt="twitter" />
                    <img src={facebook} alt="facebook" />
                    <img src={LinkedIn} alt="linkedIn" />
                </div>
            </div>
            <div className="footer__services">
                <h3>Services</h3>
                <ul>
                    <li>In flight services</li>
                    <li>Flight Bookings</li>
                    <li>Medical Services</li>
                    <li>Consultation</li>
                </ul>
            </div>
            <div className="footer__company">
                <h3>Company</h3>
                <ul>
                    <li>About Us</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className="footer__help">
            <h3>Help/Support</h3>
                <ul>
                    <li>Contact Us</li>
                    <li>Terms and conditions</li>
                    <li>Privacy Policy</li>
                    <li>FAQs</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;